// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBBranchEndpointsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * cloud_admin
   */
  account?: string;
  /**
   * @example
   * 10.0.1.100
   */
  address?: string;
  /**
   * @example
   * postgresql://cloud_admin:******@10.0.1.100:5432/neondb
   */
  connectionString?: string;
  /**
   * @example
   * neondb
   */
  database?: string;
  /**
   * @example
   * ep-3m4n5o6p7q8r
   */
  endpointId?: string;
  /**
   * @example
   * ReadWrite
   */
  endpointType?: string;
  /**
   * @example
   * ******
   */
  password?: string;
  /**
   * @example
   * 5432
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      address: 'Address',
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
      connectionString: 'string',
      database: 'string',
      endpointId: 'string',
      endpointType: 'string',
      password: 'string',
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

export class DescribeAgenticDBBranchEndpointsResponseBody extends $dara.Model {
  items?: DescribeAgenticDBBranchEndpointsResponseBodyItems[];
  /**
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

