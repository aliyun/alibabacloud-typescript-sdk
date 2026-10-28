// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterConfigResponseBodyDataParams extends $dara.Model {
  /**
   * @remarks
   * The comment of the field.
   * 
   * @example
   * The number of threads used by the storage engine to concurrently scan hard disks. A thread pool is used for unified management
   */
  comment?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 15
   */
  defaultValue?: string;
  /**
   * @remarks
   * Specifies whether the parameter takes effect dynamically without a restart.
   * 
   * @example
   * true
   */
  isDynamic?: number;
  /**
   * @remarks
   * Specifies whether users are allowed to modify the parameter.
   * 
   * @example
   * true
   */
  isUserModifiable?: number;
  /**
   * @remarks
   * The name of the configuration item.
   * 
   * @example
   * doris_scanner_thread_pool_thread_num
   */
  name?: string;
  /**
   * @remarks
   * The value range.
   * 
   * @example
   * [0-20000]
   */
  optional?: string;
  /**
   * @remarks
   * The category of the configuration item.
   * 
   * @example
   * Query
   */
  paramCategory?: string;
  /**
   * @remarks
   * The current value.
   * 
   * @example
   * 10
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      defaultValue: 'DefaultValue',
      isDynamic: 'IsDynamic',
      isUserModifiable: 'IsUserModifiable',
      name: 'Name',
      optional: 'Optional',
      paramCategory: 'ParamCategory',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      defaultValue: 'string',
      isDynamic: 'number',
      isUserModifiable: 'number',
      name: 'string',
      optional: 'string',
      paramCategory: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-wny3li0****-be
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The numeric ID of the instance.
   * 
   * @example
   * 6585
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-wny3li0****
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The user parameters.
   */
  params?: DescribeDBClusterConfigResponseBodyDataParams[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 107841167
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      dbInstanceId: 'DbInstanceId',
      dbInstanceName: 'DbInstanceName',
      params: 'Params',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      dbInstanceId: 'string',
      dbInstanceName: 'string',
      params: { 'type': 'array', 'itemType': DescribeDBClusterConfigResponseBodyDataParams },
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial. This field is returned only when RAM authentication fails.
   * 
   * @example
   * failed
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeDBClusterConfigResponseBodyData;
  /**
   * @remarks
   * The dynamic code. This field is not used and can be ignored.
   * 
   * @example
   * 0
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This field is not used and can be ignored.
   * 
   * @example
   * An error occurred while processing your request.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADF42B18-43FD-5100-83A9-BE81AB70C863
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: DescribeDBClusterConfigResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

