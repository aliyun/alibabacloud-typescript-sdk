// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomEndpointListResponseBodyDataEndpoints extends $dara.Model {
  /**
   * @remarks
   * [\\"pxc-i-vb1sqa7llp\\",\\"pxc-i-bemprx50ad\\"]
   */
  cnNames?: string[];
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * pxc-shra****zq0j01.polarx.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The custom endpoint ID.
   * 
   * @example
   * pxe-b6e****o4pfap1s
   */
  customEndpointId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-hz****zoxherr7
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the node automatically joins the cluster and starts providing services after being added or restored.
   * 
   * @example
   * true
   */
  nodeAutoEnter?: string;
  /**
   * @remarks
   * If you want to query the metrics of a read-only node in a cloud-native read/write splitting architecture instance, set this parameter to **READONLY** along with the specific **NodeId**.
   * >  In other cases, you do not need to specify this parameter (or set it to **MASTER**).
   * 
   * @example
   * same_azone_as_last
   */
  nodeRole?: string;
  /**
   * @remarks
   * The connection port of the instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vbkw****5yh4nrd639ih
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC where the endpoint resides.
   * 
   * @example
   * vpc-uf61h****dj1zg5fqp5x7
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cnNames: 'CnNames',
      connectionString: 'ConnectionString',
      customEndpointId: 'CustomEndpointId',
      DBInstanceName: 'DBInstanceName',
      name: 'Name',
      nodeAutoEnter: 'NodeAutoEnter',
      nodeRole: 'NodeRole',
      port: 'Port',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnNames: { 'type': 'array', 'itemType': 'string' },
      connectionString: 'string',
      customEndpointId: 'string',
      DBInstanceName: 'string',
      name: 'string',
      nodeAutoEnter: 'string',
      nodeRole: 'string',
      port: 'number',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cnNames)) {
      $dara.Model.validateArray(this.cnNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEndpointListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the node can be deleted.
   * 
   * @example
   * 0
   */
  canDeleteCount?: number;
  /**
   * @remarks
   * The endpoint details.
   */
  endpoints?: DescribeCustomEndpointListResponseBodyDataEndpoints[];
  static names(): { [key: string]: string } {
    return {
      canDeleteCount: 'CanDeleteCount',
      endpoints: 'Endpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDeleteCount: 'number',
      endpoints: { 'type': 'array', 'itemType': DescribeCustomEndpointListResponseBodyDataEndpoints },
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEndpointListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data struct.
   */
  data?: DescribeCustomEndpointListResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6352AC16-76BF-5135-B1EA-ED49293526E6
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
      data: DescribeCustomEndpointListResponseBodyData,
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

