// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGadInstanceDetailResponseBodySlaveDbInstancesSlaveDbInstances extends $dara.Model {
  createTime?: number;
  dbInstanceId?: string;
  dbInstanceRegion?: string;
  dtsInstanceId?: string;
  syncArchitecture?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbInstanceId: 'DbInstanceId',
      dbInstanceRegion: 'DbInstanceRegion',
      dtsInstanceId: 'DtsInstanceId',
      syncArchitecture: 'SyncArchitecture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dbInstanceId: 'string',
      dbInstanceRegion: 'string',
      dtsInstanceId: 'string',
      syncArchitecture: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGadInstanceDetailResponseBodySlaveDbInstances extends $dara.Model {
  slaveDbInstances?: DescribeGadInstanceDetailResponseBodySlaveDbInstancesSlaveDbInstances[];
  static names(): { [key: string]: string } {
    return {
      slaveDbInstances: 'SlaveDbInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slaveDbInstances: { 'type': 'array', 'itemType': DescribeGadInstanceDetailResponseBodySlaveDbInstancesSlaveDbInstances },
    };
  }

  validate() {
    if(Array.isArray(this.slaveDbInstances)) {
      $dara.Model.validateArray(this.slaveDbInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGadInstanceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1770393523000
   */
  createTime?: number;
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * MySQL
   */
  dbEngineType?: string;
  /**
   * @remarks
   * The database list mode in disaster recovery scenarios.
   * 
   * @example
   * 1
   */
  dbListMode?: number;
  /**
   * @remarks
   * The dynamic error code. This parameter will be deprecated soon.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message related to the request.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned when an error occurs during the call.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when an error occurs during the call.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The ID of the global active instance group.
   * 
   * @example
   * rm-bp162d4tp0500****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the global active instance group.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The GAD instance type.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance ID of the primary instance.
   * 
   * @example
   * rm-bp162d4tp0500**
   */
  masterDbInstanceId?: string;
  /**
   * @remarks
   * The region of the primary instance.
   * 
   * @example
   * cn-hangzhou
   */
  masterDbInstanceRegion?: string;
  /**
   * @remarks
   * The zone of the primary instance.
   * 
   * @example
   * cn-hangzhou
   */
  masterDblnstanceZoneld?: string;
  /**
   * @remarks
   * The architecture type of the primary MongoDB instance. This parameter is specific to MongoDB. Valid values:
   * - 1: replica set
   * - 2: sharded cluster
   * 
   * @example
   * 1
   */
  masterEngineArchType?: number;
  /**
   * @remarks
   * The region ID. You can specify this parameter to indicate the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C166D79D-436B-45F0-B5A5-25E1959F****
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  slaveDbInstances?: DescribeGadInstanceDetailResponseBodySlaveDbInstances;
  /**
   * @remarks
   * The status of the global active instance group.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbEngineType: 'DbEngineType',
      dbListMode: 'DbListMode',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      masterDbInstanceId: 'MasterDbInstanceId',
      masterDbInstanceRegion: 'MasterDbInstanceRegion',
      masterDblnstanceZoneld: 'MasterDblnstanceZoneld',
      masterEngineArchType: 'MasterEngineArchType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      slaveDbInstances: 'SlaveDbInstances',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dbEngineType: 'string',
      dbListMode: 'number',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      masterDbInstanceId: 'string',
      masterDbInstanceRegion: 'string',
      masterDblnstanceZoneld: 'string',
      masterEngineArchType: 'number',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      slaveDbInstances: DescribeGadInstanceDetailResponseBodySlaveDbInstances,
      status: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.slaveDbInstances && typeof (this.slaveDbInstances as any).validate === 'function') {
      (this.slaveDbInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

