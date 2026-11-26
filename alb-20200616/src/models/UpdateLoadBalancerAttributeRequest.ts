// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerAttributeRequestModificationProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The reason for enabling modification protection. The value must be 2 to 128 characters in length. It must start with a letter or Chinese character and can contain digits, periods (.), underscores (_), and hyphens (-). This parameter is valid only when **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * Managed Instance
   */
  reason?: string;
  /**
   * @remarks
   * The modification protection status of the application load balancing instance. Valid values:
   * 
   * - **NonProtection**: disables modification protection. If **Reason** is specified, it is forcibly cleared.
   * 
   * - **ConsoleProtection**: enables console modification protection. If **Reason** is specified, it takes effect.
   * 
   * > If this parameter is set to **ConsoleProtection**, modification protection is enabled. In this case, you cannot modify the instance configurations in the load balancing console, but you can invoke API operations to modify the instance configurations.
   * 
   * @example
   * ConsoleProtection
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value on your client. Make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: sends a check request without modifying the property of the application load balancing instance. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a normal request. If the request passes the check, an `HTTP_2xx` status code is returned and the operation is directly performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the application load balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-o9ulmq5hgn68jk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the Application Load Balancer instance. The name must be 2 to 128 characters in length and start with a letter, Chinese character, or digit. It can contain digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * alb-instance-test
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The modification protection configuration.
   */
  modificationProtectionConfig?: UpdateLoadBalancerAttributeRequestModificationProtectionConfig;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      modificationProtectionConfig: 'ModificationProtectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      modificationProtectionConfig: UpdateLoadBalancerAttributeRequestModificationProtectionConfig,
    };
  }

  validate() {
    if(this.modificationProtectionConfig && typeof (this.modificationProtectionConfig as any).validate === 'function') {
      (this.modificationProtectionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

