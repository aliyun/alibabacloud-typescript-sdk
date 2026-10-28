// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGadInstanceDbMembersResponseBodySlaveDbInstancesSlaveDbInstances extends $dara.Model {
  createTime?: number;
  dbInstanceId?: string;
  dtsInstanceId?: string;
  syncArchitecture?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbInstanceId: 'DbInstanceId',
      dtsInstanceId: 'DtsInstanceId',
      syncArchitecture: 'SyncArchitecture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dbInstanceId: 'string',
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

export class DescribeGadInstanceDbMembersResponseBodySlaveDbInstances extends $dara.Model {
  slaveDbInstances?: DescribeGadInstanceDbMembersResponseBodySlaveDbInstancesSlaveDbInstances[];
  static names(): { [key: string]: string } {
    return {
      slaveDbInstances: 'SlaveDbInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slaveDbInstances: { 'type': 'array', 'itemType': DescribeGadInstanceDbMembersResponseBodySlaveDbInstancesSlaveDbInstances },
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

export class DescribeGadInstanceDbMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the instance was created.
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
   * SQLServer
   */
  dbEngineType?: string;
  /**
   * @remarks
   * The dynamic error code associated with the request.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the **%s** placeholder in the **ErrMessage** error message.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **Type**, it indicates that the **Type** request parameter is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
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
   * The instance ID.
   * 
   * @example
   * gad-pfx10jt8b8m***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * @example
   * gad-sqlserver-**-set4
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance ID of the primary role.
   * 
   * @example
   * rm-j6c685****1kb05
   */
  masterDbInstanceId?: string;
  /**
   * @remarks
   * The region where the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * FC3BAAF2-74E3-4471-8EB5-96202D6A****
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
  slaveDbInstances?: DescribeGadInstanceDbMembersResponseBodySlaveDbInstances;
  /**
   * @remarks
   * The status of the active geo-redundancy instance group.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbEngineType: 'DbEngineType',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      masterDbInstanceId: 'MasterDbInstanceId',
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
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      instanceId: 'string',
      instanceName: 'string',
      masterDbInstanceId: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      slaveDbInstances: DescribeGadInstanceDbMembersResponseBodySlaveDbInstances,
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

