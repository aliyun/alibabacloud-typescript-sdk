// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGadInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the instance was created.
   * 
   * @example
   * 1733821662000
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
   * The dynamic error code.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the %s placeholder in the error message of the ErrMessage response parameter.
   * 
   * > If ErrMessage returns The Value of Input Parameter %s is not valid and DynamicMessage returns JobId, the JobId request parameter is invalid.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
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
   * rm-bpxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the group. The name must be globally unique.
   * 
   * @example
   * gad-sqlserver-hk-set4
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. Valid values: DR (disaster recovery) and GAD (active geo-redundancy).
   * 
   * @example
   * DR
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the primary ApsaraDB RDS instance.
   * 
   * @example
   * rm-j6c497vzndgd8m***
   */
  masterDbInstanceId?: string;
  /**
   * @remarks
   * The region of the primary instance.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C306C198-7807-409D-930A-D6CE6C32****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek3d****4mxya
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the group. The status is Running immediately after the group is created.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
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
      instanceType: 'InstanceType',
      masterDbInstanceId: 'MasterDbInstanceId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
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
      instanceType: 'string',
      masterDbInstanceId: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

