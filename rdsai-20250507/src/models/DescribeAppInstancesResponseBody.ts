// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @example
   * test-supabase
   */
  appName?: string;
  /**
   * @example
   * supabase
   */
  appType?: string;
  /**
   * @example
   * pgm-2ze49qv594vi****
   */
  DBInstanceName?: string;
  /**
   * @example
   * rdsai.supabase.basic
   */
  instanceClass?: string;
  /**
   * @example
   * 20241231
   */
  instanceMinorVersion?: string;
  /**
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @example
   * 8.152. XXX.XXX:8000
   */
  publicConnectionString?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * vsw-2zeaepb8k4ku05ov2****
   */
  vSwitchId?: string;
  /**
   * @example
   * 172.16.XXX.XXX:8000
   */
  vpcConnectionString?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      DBInstanceName: 'DBInstanceName',
      instanceClass: 'InstanceClass',
      instanceMinorVersion: 'InstanceMinorVersion',
      instanceName: 'InstanceName',
      publicConnectionString: 'PublicConnectionString',
      regionId: 'RegionId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcConnectionString: 'VpcConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
      DBInstanceName: 'string',
      instanceClass: 'string',
      instanceMinorVersion: 'string',
      instanceName: 'string',
      publicConnectionString: 'string',
      regionId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcConnectionString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInstancesResponseBody extends $dara.Model {
  instances?: DescribeAppInstancesResponseBodyInstances[];
  /**
   * @example
   * None
   */
  maxResults?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 32DEFB4A-861F-5D1D-ADD5-918E4FD7AB8C
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      maxResults: 'MaxResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeAppInstancesResponseBodyInstances },
      maxResults: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

