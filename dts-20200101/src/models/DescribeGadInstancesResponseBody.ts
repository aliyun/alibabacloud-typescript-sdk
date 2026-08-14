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
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the **%s** placeholder in the **ErrMessage** parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **Type**, the request parameter **Type** is invalid.
   * 
   * @example
   * present environment is not support,so skip.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
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
  instances?: DescribeGadInstancesResponseBodyInstances;
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
   * The maximum number of entries that can be displayed on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of instances returned.
   * 
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

