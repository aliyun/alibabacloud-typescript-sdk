// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNetInfoResponseBodyItemsAddressPortsPorts extends $dara.Model {
  port?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetInfoResponseBodyItemsAddressPorts extends $dara.Model {
  ports?: DescribeClusterNetInfoResponseBodyItemsAddressPortsPorts[];
  static names(): { [key: string]: string } {
    return {
      ports: 'ports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: { 'type': 'array', 'itemType': DescribeClusterNetInfoResponseBodyItemsAddressPortsPorts },
    };
  }

  validate() {
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetInfoResponseBodyItemsAddress extends $dara.Model {
  connectionString?: string;
  connectionStringPrefix?: string;
  IPAddress?: string;
  netType?: string;
  port?: string;
  ports?: DescribeClusterNetInfoResponseBodyItemsAddressPorts;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      connectionStringPrefix: 'ConnectionStringPrefix',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      ports: 'Ports',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      connectionStringPrefix: 'string',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      ports: DescribeClusterNetInfoResponseBodyItemsAddressPorts,
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.ports && typeof (this.ports as any).validate === 'function') {
      (this.ports as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetInfoResponseBodyItems extends $dara.Model {
  address?: DescribeClusterNetInfoResponseBodyItemsAddress[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: { 'type': 'array', 'itemType': DescribeClusterNetInfoResponseBodyItemsAddress },
    };
  }

  validate() {
    if(Array.isArray(this.address)) {
      $dara.Model.validateArray(this.address);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network type of the cluster. The value is always **VPC**, as this is the only supported network type.
   * 
   * @example
   * VPC
   */
  clusterNetworkType?: string;
  items?: DescribeClusterNetInfoResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69A29B65-CD0C-52B1-BE42-8B454569747F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNetworkType: 'ClusterNetworkType',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNetworkType: 'string',
      items: DescribeClusterNetInfoResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

