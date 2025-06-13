// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerAttributeResponseBodyModificationProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The reason why the configuration read-only mode is enabled.
   * 
   * The name must be 2 to 128 character characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter takes effect only if **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * Specifies whether the configuration read-only mode is enabled. Valid values:
   * 
   * *   **NonProtection**: The configuration read-only mode is disabled. In this case, the value of the **Reason** parameter that you specify does not take effect. If you set **Reason**, the value is cleared.
   * *   **ConsoleProtection**: The configuration read-only mode is enabled. In this case, the value of the **Reason** parameter takes effect.****
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

