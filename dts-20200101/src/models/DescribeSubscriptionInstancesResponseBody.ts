// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint extends $dara.Model {
  instanceID?: string;
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

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionDataType extends $dara.Model {
  DDL?: boolean;
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

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost extends $dara.Model {
  privateHost?: string;
  publicHost?: string;
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

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObjectTableList extends $dara.Model {
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

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObject extends $dara.Model {
  databaseName?: string;
  tableList?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObjectTableList;
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
      tableList: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObjectTableList,
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

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObject extends $dara.Model {
  synchronousObject?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObject[];
  static names(): { [key: string]: string } {
    return {
      synchronousObject: 'SynchronousObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronousObject: { 'type': 'array', 'itemType': DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObject },
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

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTags extends $dara.Model {
  tag?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance extends $dara.Model {
  beginTimestamp?: string;
  consumptionCheckpoint?: string;
  consumptionClient?: string;
  endTimestamp?: string;
  errorMessage?: string;
  instanceCreateTime?: string;
  jobCreateTime?: string;
  payType?: string;
  sourceEndpoint?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint;
  status?: string;
  subscribeTopic?: string;
  subscriptionDataType?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionDataType;
  subscriptionHost?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost;
  subscriptionInstanceID?: string;
  subscriptionInstanceName?: string;
  subscriptionObject?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObject;
  tags?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTags;
  static names(): { [key: string]: string } {
    return {
      beginTimestamp: 'BeginTimestamp',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      instanceCreateTime: 'InstanceCreateTime',
      jobCreateTime: 'JobCreateTime',
      payType: 'PayType',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionObject: 'SubscriptionObject',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimestamp: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      instanceCreateTime: 'string',
      jobCreateTime: 'string',
      payType: 'string',
      sourceEndpoint: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint,
      status: 'string',
      subscribeTopic: 'string',
      subscriptionDataType: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionDataType,
      subscriptionHost: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost,
      subscriptionInstanceID: 'string',
      subscriptionInstanceName: 'string',
      subscriptionObject: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObject,
      tags: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTags,
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
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstances extends $dara.Model {
  subscriptionInstance?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance[];
  static names(): { [key: string]: string } {
    return {
      subscriptionInstance: 'SubscriptionInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionInstance: { 'type': 'array', 'itemType': DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance },
    };
  }

  validate() {
    if(Array.isArray(this.subscriptionInstance)) {
      $dara.Model.validateArray(this.subscriptionInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The page number of the returned page.
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
   * The ID of the request.
   * 
   * @example
   * FC3BAAF2-74E3-4471-8EB5-96202D6A****
   */
  requestId?: string;
  subscriptionInstances?: DescribeSubscriptionInstancesResponseBodySubscriptionInstances;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of change tracking instances that belong to your Alibaba Cloud account.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      subscriptionInstances: 'SubscriptionInstances',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      subscriptionInstances: DescribeSubscriptionInstancesResponseBodySubscriptionInstances,
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.subscriptionInstances && typeof (this.subscriptionInstances as any).validate === 'function') {
      (this.subscriptionInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

