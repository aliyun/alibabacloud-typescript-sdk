// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource to which the policy is attached.
   * 
   * This parameter is required.
   * 
   * @example
   * api-cu07jj6m1hkokaus***
   */
  attachResourceId?: string;
  /**
   * @remarks
   * The type of the resource to which the policy is attached. Valid values: HttpApi, GatewayRoute, Operation, GatewayService, GatewayServicePort, Gateway, and Domain.
   * 
   * This parameter is required.
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * env-cquqsollhtgid***
   */
  environmentId?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-cq7l5s5lhtgi6qas***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * p-cq787etlhtghrptjg***
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceId: 'attachResourceId',
      attachResourceType: 'attachResourceType',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceId: 'string',
      attachResourceType: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

