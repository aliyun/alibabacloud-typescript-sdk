// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBBranchEndpointsResponseBodyItemsAddressItems extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * pe-cedar-cygfzprh775g.polaragentic.pre.rds.aliyuncs.com
   */
  address?: string;
  /**
   * @remarks
   * The full PostgreSQL connection string.
   * 
   * @example
   * postgresql://cloud_admin:******@pe-cedar-cygfzprh775g.polaragentic.pre.rds.aliyuncs.com:5460/neondb
   */
  connectionString?: string;
  /**
   * @remarks
   * The network type. Valid values: Private and Public.
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 5460
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      connectionString: 'string',
      netType: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgenticDBBranchEndpointsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * cloud_admin
   */
  account?: string;
  /**
   * @remarks
   * The compatible connection address. The public endpoint is returned first. If no public endpoint is available, the private endpoint is returned.
   * 
   * @example
   * 10.0.1.100
   */
  address?: string;
  /**
   * @remarks
   * The list of public and private network endpoints.
   */
  addressItems?: DescribeAgenticDBBranchEndpointsResponseBodyItemsAddressItems[];
  /**
   * @remarks
   * The compatible connection string. The public connection string is returned first. If no public connection string is available, the private connection string is returned.
   * 
   * @example
   * postgresql://cloud_admin:******@10.0.1.100:5432/neondb
   */
  connectionString?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * neondb
   */
  database?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-3m4n5o6p7q8r
   */
  endpointId?: string;
  /**
   * @remarks
   * The endpoint type.
   * 
   * @example
   * ReadWrite
   */
  endpointType?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * The compatible connection port that corresponds to the Address parameter.
   * 
   * @example
   * 5432
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      address: 'Address',
      addressItems: 'AddressItems',
      connectionString: 'ConnectionString',
      database: 'Database',
      endpointId: 'EndpointId',
      endpointType: 'EndpointType',
      password: 'Password',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      address: 'string',
      addressItems: { 'type': 'array', 'itemType': DescribeAgenticDBBranchEndpointsResponseBodyItemsAddressItems },
      connectionString: 'string',
      database: 'string',
      endpointId: 'string',
      endpointType: 'string',
      password: 'string',
      port: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addressItems)) {
      $dara.Model.validateArray(this.addressItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgenticDBBranchEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of endpoints.
   */
  items?: DescribeAgenticDBBranchEndpointsResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E5F6A7B8-C9D0-1234-EFAB-567890123EFA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAgenticDBBranchEndpointsResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

