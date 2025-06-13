// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequestModificationProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The reason for enabling the configuration read-only mode.
   * 
   * The reason must be 2 to 128 characters in length, can contain letters, digits, periods (.), underscores (_), and hyphens (-), and must start with a letter.
   * 
   * >  This parameter takes effect only when **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration read-only mode. Valid values:
   * 
   * *   **NonProtection**: Disables the configuration read-only mode. In this case, the value of the **Reason** parameter that you specify does not take effect. If you specify **Reason**, the value of the parameter is cleared.
   * *   **ConsoleProtection**: Enables the configuration read-only mode. In this case, the value of the **Reason** parameter that you specify takes effect.****
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

