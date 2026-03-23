// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem extends $dara.Model {
  connectionString?: string;
  ipAddress?: string;
  ipType?: string;
  port?: string;
  vSwitchId?: string;
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
  DBInstanceId?: string;
  nodeId?: string;
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
  addressItems?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems;
  endpointDescription?: string;
  endpointId?: string;
  endpointType?: string;
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
  DBInstanceEndpoints?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints;
  DBInstanceName?: string;
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
  data?: DescribeDBInstanceEndpointsResponseBodyData;
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

