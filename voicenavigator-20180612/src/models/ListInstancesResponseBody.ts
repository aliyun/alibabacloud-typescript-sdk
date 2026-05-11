// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstances extends $dara.Model {
  applicableOperations?: string[];
  /**
   * @example
   * 10
   */
  concurrency?: number;
  createTime?: number;
  description?: string;
  /**
   * @example
   * dc437bba-5a25-4bbc-b4c2-f268864bebb5
   */
  instanceId?: string;
  /**
   * @example
   * 1582266750353
   */
  modifyTime?: number;
  /**
   * @example
   * xxx
   */
  modifyUserName?: string;
  name?: string;
  nluServiceParamsJson?: string;
  numbers?: string[];
  /**
   * @example
   * Published
   */
  status?: string;
  unionInstanceId?: string;
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      applicableOperations: 'ApplicableOperations',
      concurrency: 'Concurrency',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      modifyUserName: 'ModifyUserName',
      name: 'Name',
      nluServiceParamsJson: 'NluServiceParamsJson',
      numbers: 'Numbers',
      status: 'Status',
      unionInstanceId: 'UnionInstanceId',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableOperations: { 'type': 'array', 'itemType': 'string' },
      concurrency: 'number',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      modifyTime: 'number',
      modifyUserName: 'string',
      name: 'string',
      nluServiceParamsJson: 'string',
      numbers: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      unionInstanceId: 'string',
      unionSource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicableOperations)) {
      $dara.Model.validateArray(this.applicableOperations);
    }
    if(Array.isArray(this.numbers)) {
      $dara.Model.validateArray(this.numbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * A8AED3C8-F57B-5D71-9A34-4A170287533F
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

