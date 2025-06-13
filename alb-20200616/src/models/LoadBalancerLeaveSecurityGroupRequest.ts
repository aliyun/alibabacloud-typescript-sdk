// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoadBalancerLeaveSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The task result.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0****
   */
  clientToken?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the ALB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-iv9gj3lpak6fbj****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The security group IDs.
   * 
   * This parameter is required.
   */
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

