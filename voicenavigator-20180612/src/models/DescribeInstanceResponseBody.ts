// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBody extends $dara.Model {
  abilityType?: string;
  applicableOperations?: string[];
  /**
   * @example
   * 10
   */
  concurrency?: number;
  description?: string;
  /**
   * @example
   * test1_instanceId
   */
  instanceId?: string;
  /**
   * @example
   * 1532436395329
   */
  modifyTime?: number;
  modifyUserName?: string;
  name?: string;
  nluServiceParamsJson?: string;
  /**
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  /**
   * @example
   * Drafted
   */
  status?: string;
  unionInstanceId?: string;
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      abilityType: 'AbilityType',
      applicableOperations: 'ApplicableOperations',
      concurrency: 'Concurrency',
      description: 'Description',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      modifyUserName: 'ModifyUserName',
      name: 'Name',
      nluServiceParamsJson: 'NluServiceParamsJson',
      requestId: 'RequestId',
      status: 'Status',
      unionInstanceId: 'UnionInstanceId',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abilityType: 'string',
      applicableOperations: { 'type': 'array', 'itemType': 'string' },
      concurrency: 'number',
      description: 'string',
      instanceId: 'string',
      modifyTime: 'number',
      modifyUserName: 'string',
      name: 'string',
      nluServiceParamsJson: 'string',
      requestId: 'string',
      status: 'string',
      unionInstanceId: 'string',
      unionSource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicableOperations)) {
      $dara.Model.validateArray(this.applicableOperations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

