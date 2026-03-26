// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGadInstancesResponseBodyInstancesInstances extends $dara.Model {
  createTime?: number;
  dbEngineType?: string;
  dbInstanceCount?: number;
  instanceId?: string;
  instanceName?: string;
  instanceRegion?: string;
  instanceType?: string;
  masterDbInstanceId?: string;
  masterDbInstanceName?: string;
  masterDbInstanceRegion?: string;
  masterDbInstanceZoneId?: string;
  masterEngineArchType?: number;
  resourceGroupId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbEngineType: 'DbEngineType',
      dbInstanceCount: 'DbInstanceCount',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRegion: 'InstanceRegion',
      instanceType: 'InstanceType',
      masterDbInstanceId: 'MasterDbInstanceId',
      masterDbInstanceName: 'MasterDbInstanceName',
      masterDbInstanceRegion: 'MasterDbInstanceRegion',
      masterDbInstanceZoneId: 'MasterDbInstanceZoneId',
      masterEngineArchType: 'MasterEngineArchType',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dbEngineType: 'string',
      dbInstanceCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceRegion: 'string',
      instanceType: 'string',
      masterDbInstanceId: 'string',
      masterDbInstanceName: 'string',
      masterDbInstanceRegion: 'string',
      masterDbInstanceZoneId: 'string',
      masterEngineArchType: 'number',
      resourceGroupId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGadInstancesResponseBodyInstances extends $dara.Model {
  instances?: DescribeGadInstancesResponseBodyInstancesInstances[];
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeGadInstancesResponseBodyInstancesInstances },
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

export class DescribeGadInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @example
   * present environment is not support,so skip.
   */
  dynamicMessage?: string;
  /**
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  instances?: DescribeGadInstancesResponseBodyInstances;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @example
   * C166D79D-436B-45F0-B5A5-25E1959F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 22
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      instances: DescribeGadInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

