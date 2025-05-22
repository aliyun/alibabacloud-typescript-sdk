// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackOperationRisksResponseBodyRiskResources extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned when the risk detection fails.
   * 
   * >  This parameter is not returned if the risk detection is successful.
   * 
   * @example
   * NoPermission
   */
  code?: string;
  /**
   * @remarks
   * The logical ID of the resource. The logical ID is the resource name that is defined in the template.
   * 
   * @example
   * MySG
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The error message that is returned when the risk detection fails.
   * 
   * >  This parameter is not returned if the risk detection is successful.
   * 
   * @example
   * You are not authorized to complete this action.
   */
  message?: string;
  /**
   * @remarks
   * The physical ID of the resource. The physical ID is the actual ID of the resource.
   * 
   * @example
   * sg-bp1dpioafqphedg9****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The cause of the risk.
   * 
   * @example
   * There are some ECS instances (i-bp18el96s4wq635e****) depending on the security group.
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the request when the risk detection fails.
   * 
   * >  This parameter is not returned if the risk detection is successful.
   * 
   * @example
   * DF4296CF-F45F-4845-A72B-BE617601DB25
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ALIYUN::ECS::SecurityGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The type of the risk. Valid values:
   * 
   * *   Referenced: The resource is referenced by other resources.
   * *   MaybeReferenced: The resource may be referenced by other resources.
   * *   AdditionalRiskCheckRequired: An additional risk detection is required for a nested stack.
   * *   OperationIgnored: The operation does not take effect for the resource.
   * 
   * @example
   * Referenced
   */
  riskType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logicalResourceId: 'LogicalResourceId',
      message: 'Message',
      physicalResourceId: 'PhysicalResourceId',
      reason: 'Reason',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      riskType: 'RiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logicalResourceId: 'string',
      message: 'string',
      physicalResourceId: 'string',
      reason: 'string',
      requestId: 'string',
      resourceType: 'string',
      riskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

