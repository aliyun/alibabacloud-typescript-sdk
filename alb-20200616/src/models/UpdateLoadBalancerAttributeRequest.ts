// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerAttributeRequestModificationProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The reason for enabling the configuration read-only mode.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter takes effect only when **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration read-only mode. Valid values:
   * 
   * *   **NonProtection**: disables the configuration read-only mode. In this case, the value of the **Reason** parameter that you specify does not take effect. If you set the value of **Reason**, the value is cleared.
   * *   **ConsoleProtection**: enables the configuration read-only mode. In this case, the value of the **Reason** parameter that you specify takes effect.****
   * 
   * >  If the parameter is set to **ConsoleProtection**, the configuration read-only mode is enabled. You cannot modify the configurations of the ALB instance in the ALB console. However, you can call API operations to modify the configurations of the ALB instance.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and sends the request. If the request passes the dry run, a `2xx HTTP` status code is returned and the operation is performed. This is the default value.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the ALB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-o9ulmq5hgn68jk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the ALB instance. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * lb-instance-test
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The configuration read-only mode settings.
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

