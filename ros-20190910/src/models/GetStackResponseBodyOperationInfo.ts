// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackResponseBodyOperationInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the API operation that belongs to another Alibaba Cloud service.
   * 
   * @example
   * DeleteSecurityGroup
   */
  action?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DependencyViolation
   */
  code?: string;
  /**
   * @remarks
   * The logical ID of the resource on which the operation error occurs.
   * 
   * @example
   * EcsSecurityGroup
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * There is still instance(s) in the specified security group.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request that is initiated to call the API operation of another Alibaba Cloud service.
   * 
   * @example
   * 071D6166-3F6B-5C7B-A1F0-0113FBB643A8
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the resource on which the operation error occurs.
   * 
   * @example
   * ALIYUN::ECS::SecurityGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      code: 'Code',
      logicalResourceId: 'LogicalResourceId',
      message: 'Message',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      code: 'string',
      logicalResourceId: 'string',
      message: 'string',
      requestId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

