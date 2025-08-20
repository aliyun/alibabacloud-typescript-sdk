// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNetInfoResponseBodyItemsAddressPortsPorts extends $dara.Model {
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **tcp**
   * *   **http**
   * *   **https**
   * *   **mysql**
   * 
   * @example
   * mysql
   */
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
  /**
   * @remarks
   * The endpoint of the cluster.
   * 
   * *   If NetType is set to VPC, the VPC endpoint of the cluster is returned.
   * *   If NetType is set to Public, the public endpoint of the cluster is returned.
   * 
   * @example
   * amv-wz9dqvn0o7****.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The prefix of the endpoint.
   * 
   * *   If NetType is set to VPC, the prefix of the VPC endpoint is returned.
   * *   If NetType is set to Public, the prefix of the public endpoint is returned.
   * 
   * @example
   * amv-wz9dqvn0o7****
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The IP address of the endpoint.
   * 
   * *   If NetType is set to VPC, the private IP address of the cluster is returned.
   * *   If NetType is set to Public, the public IP address of the cluster is returned.
   * 
   * @example
   * 192.168.xx.xx
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   **Public**: Internet.
   * *   **VPC**: VPC.
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster. **3306** is returned.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ports.
   */
  ports?: DescribeClusterNetInfoResponseBodyItemsAddressPorts;
  /**
   * @remarks
   * The VPC ID.
   * 
   * >  If NetType is set to Public, an empty string is returned.
   * 
   * @example
   * vpc-8vbhucmd5b****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * >  If NetType is set to Public, an empty string is returned.
   * 
   * @example
   * vsw-bp1syh8vvw8yec****
   */
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
   * The network type of the cluster. Only the Virtual Private Cloud (VPC) network type is supported. **VPC** is returned.
   * 
   * @example
   * VPC
   */
  clusterNetworkType?: string;
  /**
   * @remarks
   * The queried network information about the cluster.
   */
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

