// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the source database.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  instanceID?: string;
  /**
   * @remarks
   * The instance type of the source database.
   * > This parameter is returned only when the change tracking instance is of the new version.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the subscribed data includes DDL statements. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  DDL?: boolean;
  /**
   * @remarks
   * Indicates whether the subscribed data includes DML statements. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  DML?: boolean;
  static names(): { [key: string]: string } {
    return {
      DDL: 'DDL',
      DML: 'DML',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDL: 'boolean',
      DML: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionHost extends $dara.Model {
  /**
   * @remarks
   * The private endpoint of the change tracking instance, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public endpoint of the subscribe instance, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC endpoint of the change tracking instance, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****-vpc.aliyuncs.com:18003
   */
  VPCHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      VPCHost: 'VPCHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      VPCHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObjectTableList extends $dara.Model {
  table?: string[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObject extends $dara.Model {
  databaseName?: string;
  tableList?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObjectTableList;
  wholeDatabase?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      tableList: 'TableList',
      wholeDatabase: 'WholeDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      tableList: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObjectTableList,
      wholeDatabase: 'string',
    };
  }

  validate() {
    if(this.tableList && typeof (this.tableList as any).validate === 'function') {
      (this.tableList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject extends $dara.Model {
  synchronousObject?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObject[];
  static names(): { [key: string]: string } {
    return {
      synchronousObject: 'SynchronousObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronousObject: { 'type': 'array', 'itemType': DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObject },
    };
  }

  validate() {
    if(Array.isArray(this.synchronousObject)) {
      $dara.Model.validateArray(this.synchronousObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The beginning of the timestamp range for data stored in the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The consumption checkpoint of the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The information about the downstream consumption client, which consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The end of the timestamp range for data stored in the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-03-26T14:03:21Z
   */
  endTimestamp?: string;
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
   * The error message returned when the change tracking task is abnormal.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password:                              YES)
   */
  errorMessage?: string;
  /**
   * @remarks
   * The billing method of the change tracking instance. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0845D0A-6D36-4EEB-BE26-CF191E1A****
   */
  requestId?: string;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint;
  /**
   * @remarks
   * The status of the change tracking instance. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Prechecking**: running a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **Starting**: starting.
   * - **Normal**: running normally.
   * - **Abnormal**: abnormal.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The subscription topic.
   * > This parameter is returned only when the change tracking instance is of the new version and a consumer group is created by calling the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of the subscribed data.
   */
  subscriptionDataType?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType;
  /**
   * @remarks
   * The endpoint of the change tracking instance.
   */
  subscriptionHost?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionHost;
  /**
   * @remarks
   * The ID of the change tracking instance.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  subscriptionInstanceID?: string;
  /**
   * @remarks
   * The name of the change tracking instance.
   * 
   * @example
   * api测试
   */
  subscriptionInstanceName?: string;
  subscriptionObject?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The ID of the change tracking task.
   * 
   * @example
   * y0zz3t13h7d****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTimestamp: 'BeginTimestamp',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      endTimestamp: 'EndTimestamp',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorMessage: 'ErrorMessage',
      payType: 'PayType',
      requestId: 'RequestId',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionObject: 'SubscriptionObject',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimestamp: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      endTimestamp: 'string',
      errCode: 'string',
      errMessage: 'string',
      errorMessage: 'string',
      payType: 'string',
      requestId: 'string',
      sourceEndpoint: DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint,
      status: 'string',
      subscribeTopic: 'string',
      subscriptionDataType: DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType,
      subscriptionHost: DescribeSubscriptionInstanceStatusResponseBodySubscriptionHost,
      subscriptionInstanceID: 'string',
      subscriptionInstanceName: 'string',
      subscriptionObject: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject,
      success: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(this.subscriptionDataType && typeof (this.subscriptionDataType as any).validate === 'function') {
      (this.subscriptionDataType as any).validate();
    }
    if(this.subscriptionHost && typeof (this.subscriptionHost as any).validate === 'function') {
      (this.subscriptionHost as any).validate();
    }
    if(this.subscriptionObject && typeof (this.subscriptionObject as any).validate === 'function') {
      (this.subscriptionObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

