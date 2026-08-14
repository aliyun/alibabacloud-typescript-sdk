// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResubmitConfigResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an out-of-memory (OOM) exception is configured.
   * 
   * @example
   * false
   */
  exceedMemoryException?: boolean;
  /**
   * @remarks
   * The name of the source resource group.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The peak memory usage.
   * 
   * @example
   * 32
   */
  peakMemory?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement. Unit: milliseconds (ms).
   * 
   * @example
   * 300
   */
  queryTime?: string;
  /**
   * @remarks
   * The name of the destination resource group.
   * 
   * @example
   * test_target_group
   */
  targetGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      exceedMemoryException: 'ExceedMemoryException',
      groupName: 'GroupName',
      peakMemory: 'PeakMemory',
      queryTime: 'QueryTime',
      targetGroupName: 'TargetGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceedMemoryException: 'boolean',
      groupName: 'string',
      peakMemory: 'string',
      queryTime: 'string',
      targetGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResubmitConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all Data Warehouse Edition (V3.0) clusters in the destination region.
   * 
   * @example
   * am-8vbyw9awuj141haf9
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D217417-BBA7-566C-9B9D-FFCBC86112B0
   */
  requestId?: string;
  /**
   * @remarks
   * The list of rules.
   */
  rules?: DescribeResubmitConfigResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeResubmitConfigResponseBodyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

