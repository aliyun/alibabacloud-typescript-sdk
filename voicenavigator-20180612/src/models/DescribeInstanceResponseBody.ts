// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The capability type of the instance.<br>
   * DEFAULT: Full capabilities.<br>
   * VOICE_ONLY: Voice-only capabilities, which do not include conversation intervention.<br><br>
   * 
   * @example
   * VOICE_ONLY
   */
  abilityType?: string;
  /**
   * @remarks
   * Applicable operations.
   */
  applicableOperations?: string[];
  /**
   * @remarks
   * The concurrency of the instance.
   * 
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * 导航测试实例描述信息
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cd6fc91bc13445c2af7f2e3e31418520
   */
  instanceId?: string;
  /**
   * @remarks
   * The last modification time of the instance.
   * 
   * @example
   * 1683216000000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The user who last modified the instance.
   * 
   * @example
   * 2508711*******
   */
  modifyUserName?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * 导航测试实例
   */
  name?: string;
  nluServiceParamsJson?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 790B5EA3-D251-1666-B1E0-4D1F4B33A592
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * Published
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

