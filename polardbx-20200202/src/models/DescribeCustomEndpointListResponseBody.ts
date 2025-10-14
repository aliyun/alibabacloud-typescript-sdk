// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomEndpointListResponseBodyDataEndpoints extends $dara.Model {
  /**
   * @remarks
   * [\\"pxc-i-vb1sqa7llp\\",\\"pxc-i-bemprx50ad\\"]
   */
  cnNames?: string[];
  /**
   * @example
   * pxc-shra****zq0j01.polarx.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * pxe-b6e****o4pfap1s
   */
  customEndpointId?: string;
  /**
   * @example
   * pxc-hz****zoxherr7
   */
  DBInstanceName?: string;
  /**
   * @example
   * Name
   */
  name?: string;
  /**
   * @example
   * true
   */
  nodeAutoEnter?: string;
  /**
   * @example
   * same_azone_as_last
   */
  nodeRole?: string;
  /**
   * @example
   * 3306
   */
  port?: number;
  /**
   * @example
   * created
   */
  status?: string;
  /**
   * @example
   * vsw-8vbkw****5yh4nrd639ih
   */
  vSwitchId?: string;
  /**
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
   * @example
   * 0
   */
  canDeleteCount?: number;
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

