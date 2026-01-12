// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The name of the AI application.
   * 
   * @example
   * test-supabase
   */
  appName?: string;
  /**
   * @remarks
   * The application type. Only **supabase** is supported. For more information, see [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html).
   * 
   * @example
   * supabase
   */
  appType?: string;
  /**
   * @remarks
   * The ID of the RDS for PostgreSQL instance with which the RDS Supabase instances are associated.
   * 
   * @example
   * pgm-2ze49qv594vi****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * rdsai.supabase.basic
   */
  instanceClass?: string;
  /**
   * @remarks
   * The minor version number of RDS Supabase instance.
   * 
   * @example
   * 20241231
   */
  instanceMinorVersion?: string;
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
   * The public endpoint of the AI application.
   * 
   * @example
   * 8.152. XXX.XXX:8000
   */
  publicConnectionString?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The instance status. For more information, see [Instance state table](https://help.aliyun.com/document_detail/2623972.html).
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-2zeaepb8k4ku05ov2****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The internal endpoint of the AI application.
   * 
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
  /**
   * @remarks
   * The information about the RDS Supabase instances.
   */
  instances?: DescribeAppInstancesResponseBodyInstances[];
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * None
   */
  maxResults?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32DEFB4A-861F-5D1D-ADD5-918E4FD7AB8C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

