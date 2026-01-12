// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceEndpointsResponseBodyDBInstanceEndpoints extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the RDS instance.
   * 
   * @example
   * pgm-xxxx.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The network type of the RDS instance. Valid values:
   * 
   * *   **public**: Internet
   * *   **vpc**: VPC
   * 
   * @example
   * vpc
   */
  ipType?: string;
  /**
   * @remarks
   * The port used to access the RDS instance.
   * 
   * @example
   * 5432
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      ipType: 'IpType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      ipType: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceEndpointsResponseBodyInstanceEndpoints extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the RDS Supabase instance.
   * 
   * @example
   * 8.152.XXX.XXX:8000
   */
  connectionString?: string;
  /**
   * @remarks
   * The IP address used to access the RDS Supabase instance.
   * 
   * @example
   * 8.152.XXX.XXX
   */
  IP?: string;
  /**
   * @remarks
   * The network type of the RDS Supabase instance. Valid values:
   * 
   * *   **public**: Internet
   * *   **vpc**: VPC
   * 
   * @example
   * public
   */
  ipType?: string;
  /**
   * @remarks
   * The port used to access the RDS Supabase instance.
   * 
   * @example
   * 8000
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      IP: 'IP',
      ipType: 'IpType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      IP: 'string',
      ipType: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the endpoints of the RDS instance.
   */
  DBInstanceEndpoints?: DescribeInstanceEndpointsResponseBodyDBInstanceEndpoints[];
  /**
   * @remarks
   * The information about the endpoints of the RDS Supabase instance.
   */
  instanceEndpoints?: DescribeInstanceEndpointsResponseBodyInstanceEndpoints[];
  /**
   * @remarks
   * The ID of the RDS Supabase instance.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32DEFB4A-861F-5D1D-ADD5-918E4FD7AB8C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceEndpoints: 'DBInstanceEndpoints',
      instanceEndpoints: 'InstanceEndpoints',
      instanceName: 'InstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceEndpoints: { 'type': 'array', 'itemType': DescribeInstanceEndpointsResponseBodyDBInstanceEndpoints },
      instanceEndpoints: { 'type': 'array', 'itemType': DescribeInstanceEndpointsResponseBodyInstanceEndpoints },
      instanceName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceEndpoints)) {
      $dara.Model.validateArray(this.DBInstanceEndpoints);
    }
    if(Array.isArray(this.instanceEndpoints)) {
      $dara.Model.validateArray(this.instanceEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

