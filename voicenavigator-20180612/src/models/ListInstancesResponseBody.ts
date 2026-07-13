// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The list of applicable operations for the instance.
   */
  applicableOperations?: string[];
  /**
   * @remarks
   * The concurrency.
   * 
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1658202465000
   */
  createTime?: number;
  /**
   * @remarks
   * The description.
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
   * The modification time.
   * 
   * @example
   * 1582266750353
   */
  modifyTime?: number;
  /**
   * @remarks
   * The operator who performed the operation.
   * 
   * @example
   * xxx
   */
  modifyUserName?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 测试实例
   */
  name?: string;
  /**
   * @remarks
   * The large language model service parameters in JSON format.
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
   * The instance status.
   * 
   * @example
   * Published
   */
  status?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * 
   * > When UnionSource is set to CCC, UnionInstanceId is set to the instance ID of Cloud Call Center.
   * 
   * @example
   * zhyl
   */
  unionInstanceId?: string;
  /**
   * @remarks
   * The source.
   * 
   * - CCC: Cloud Call Center.
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
   * The array of instances.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A8AED3C8-F57B-5D71-9A34-4A170287533F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

