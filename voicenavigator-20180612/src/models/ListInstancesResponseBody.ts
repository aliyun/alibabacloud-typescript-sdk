// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * A list of applicable operations.
   */
  applicableOperations?: string[];
  /**
   * @remarks
   * The maximum number of concurrent calls.
   * 
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @remarks
   * The time when the instance was created. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1658202465000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * 测试的实例
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dc437bba-5a25-4bbc-b4c2-f268864bebb5
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the instance was last modified. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1582266750353
   */
  modifyTime?: number;
  /**
   * @remarks
   * The user who last modified the instance.
   * 
   * @example
   * xxx
   */
  modifyUserName?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * 测试实例
   */
  name?: string;
  /**
   * @remarks
   * The parameters of the NLU service in the JSON format.
   * 
   * @example
   * {"agentId":"1213503","isCCCAgent":"true","agentKey":"107e04a7519243eb83c9b549ea3b6829_p_ccc_public"}
   */
  nluServiceParamsJson?: string;
  /**
   * @remarks
   * The list of inbound numbers.
   */
  numbers?: string[];
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * Published
   */
  status?: string;
  /**
   * @remarks
   * The instance ID from the source system.
   * 
   * > If UnionSource is CCC, this parameter indicates the instance ID of the Cloud Communication Center instance.
   * 
   * @example
   * zhyl
   */
  unionInstanceId?: string;
  /**
   * @remarks
   * The source of the instance.
   * 
   * - `CCC`: Cloud Communication Center
   * 
   * @example
   * CCC
   */
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
  /**
   * @remarks
   * The list of instances.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A8AED3C8-F57B-5D71-9A34-4A170287533F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

