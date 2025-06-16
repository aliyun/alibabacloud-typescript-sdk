// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhysicalConnectionsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the filter. Valid values:
   * 
   * *   **PhysicalConnectionId**: the ID of the Express Connect circuit.
   * 
   * *   **AccessPointId**: the ID of the access point.
   * 
   * *   **Type**: the type of resource to which the Express Connect circuit is connected. You can set Type only to **VPC**.
   * 
   * *   **LineOperator**: the connectivity provider of the Express Connect circuit. Valid values:
   * 
   *     *   **CT**: China Telecom.
   *     *   **CU**: China Unicom.
   *     *   **CM**: China Mobile.
   *     *   **CO**: other connectivity providers in the Chinese mainland.
   *     *   **Equinix**: Equinix.
   *     *   **Other**: other connectivity providers outside the Chinese mainland.
   * 
   * *   **Spec**: the specification of the Express Connect circuit. Valid values:
   * 
   *     *   **1G and below**
   *     *   **10G**
   *     *   **40G**
   *     *   **100G**
   * 
   * >  By default, you cannot set the value to **40G** or **100G**. To use these values, you must first contact your account manager.
   * 
   * *   **Status**: the status of the Express Connect circuit. Valid values:
   * 
   *     *   **Initial**: The application is under review.
   *     *   **Approved**: The application is approved.
   *     *   **Allocating**: The system is allocating resources.
   *     *   **Allocated**: The Express Connect circuit is under construction.
   *     *   **Confirmed**: The Express Connect circuit is pending for user confirmation.
   *     *   **Enabled**: The Express Connect circuit is enabled.
   *     *   **Rejected**: The application is rejected.
   *     *   **Canceled**: The application is canceled.
   *     *   **Allocation Failed**: The system failed to allocate resources.
   *     *   **Terminating**: The Express Connect circuit is being disabled.
   *     *   **Terminated**: The Express Connect circuit is disabled.
   * 
   * *   **Name**: the name of the Express Connect circuit.
   * 
   * *   **ProductType**: the type of the Express Connect circuit. Valid values:
   * 
   *     *   **VirtualPhysicalConnection**: shared Express Connect circuit
   *     *   **PhysicalConnection**: dedicated Express Connect circuit.
   * 
   * You can specify at most five filter conditions in each request. The logical relation among the filter conditions is **AND**. Therefore, an Express Connect circuit is returned only when all specified filter conditions are matched.
   * 
   * @example
   * Name
   */
  key?: string;
  /**
   * @remarks
   * The filter values.
   * 
   * @example
   * 1
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

