// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppInstancesResponseBodyInstancesComponents extends $dara.Model {
  /**
   * @remarks
   * The component status.
   */
  status?: string;
  /**
   * @remarks
   * The component type.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test-supabase
   */
  appName?: string;
  /**
   * @remarks
   * The application type. The only supported value is **supabase**, which represents [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html).
   * 
   * @example
   * supabase
   */
  appType?: string;
  /**
   * @remarks
   * The components of the instance.
   */
  components?: DescribeAppInstancesResponseBodyInstancesComponents[];
  /**
   * @remarks
   * The DB instance ID of the connected ApsaraDB RDS for PostgreSQL instance.
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
   * The minor version of the AI application.
   * 
   * @example
   * 20241231
   */
  instanceMinorVersion?: string;
  /**
   * @remarks
   * The ID of the application instance.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public connection string.
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
   * The instance status. For more information, see [Instance status table](https://help.aliyun.com/document_detail/2623972.html).
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The VSwitch ID.
   * 
   * @example
   * vsw-2zeaepb8k4ku05ov2****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC connection string.
   * 
   * @example
   * 172.16.XXX.XXX:8000
   */
  vpcConnectionString?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      components: 'Components',
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
      components: { 'type': 'array', 'itemType': DescribeAppInstancesResponseBodyInstancesComponents },
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
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of instances.
   */
  instances?: DescribeAppInstancesResponseBodyInstances[];
  /**
   * @remarks
   * This parameter is reserved for future use.
   * 
   * @example
   * None
   */
  maxResults?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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

