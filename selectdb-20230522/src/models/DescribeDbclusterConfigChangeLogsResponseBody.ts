// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterConfigChangeLogsResponseBodyDataParamChangeLogs extends $dara.Model {
  /**
   * @remarks
   * The task creation time (GMT).
   * 
   * @example
   * 2022-10-11T08:53:32Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The task modification time (GMT).
   * 
   * @example
   * 2024-03-08T10:08Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the change record.
   * 
   * @example
   * 617975
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the configuration has taken effect.
   * 
   * @example
   * false
   */
  isApplied?: boolean;
  /**
   * @remarks
   * The name of the configuration item.
   * 
   * @example
   * cumulative_compaction_rounds_for_each_base_compaction_round
   */
  name?: string;
  /**
   * @remarks
   * The new parameter value.
   * 
   * @example
   * 12
   */
  newValue?: string;
  /**
   * @remarks
   * The old parameter value.
   * 
   * @example
   * 10
   */
  oldValue?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      isApplied: 'IsApplied',
      name: 'Name',
      newValue: 'NewValue',
      oldValue: 'OldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      isApplied: 'boolean',
      name: 'string',
      newValue: 'string',
      oldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigChangeLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-7213c8****-be
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
   * selectdb-cn-7213c8****
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The parameter change records.
   */
  paramChangeLogs?: DescribeDBClusterConfigChangeLogsResponseBodyDataParamChangeLogs[];
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
      paramChangeLogs: 'ParamChangeLogs',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      dbInstanceId: 'string',
      dbInstanceName: 'string',
      paramChangeLogs: { 'type': 'array', 'itemType': DescribeDBClusterConfigChangeLogsResponseBodyDataParamChangeLogs },
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.paramChangeLogs)) {
      $dara.Model.validateArray(this.paramChangeLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigChangeLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * failed
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeDBClusterConfigChangeLogsResponseBodyData;
  /**
   * @remarks
   * The dynamic code. This parameter is not in use. Ignore this parameter.
   * 
   * @example
   * 0
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This parameter is not in use. Ignore this parameter.
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
   * F8900A96-67F7-5274-A41B-7722E1ECF8C9
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
      data: DescribeDBClusterConfigChangeLogsResponseBodyData,
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

