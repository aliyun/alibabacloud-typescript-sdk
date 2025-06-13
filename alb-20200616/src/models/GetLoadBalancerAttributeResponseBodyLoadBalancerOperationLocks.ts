// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerAttributeResponseBodyLoadBalancerOperationLocks extends $dara.Model {
  /**
   * @remarks
   * The reason why the ALB instance is locked. This parameter is valid only if **LoadBalancerBussinessStatus** is set to **Abnormal**.
   * 
   * @example
   * nolock
   */
  lockReason?: string;
  /**
   * @remarks
   * The lock type. Valid values:
   * 
   * *   **SecurityLocked**: The ALB instance is locked due to security reasons.
   * *   **RelatedResourceLocked**: The ALB instance is locked due to other resources that are associated with the ALB instance.
   * *   **FinancialLocked**: The ALB instance is locked due to overdue payments.
   * *   **ResidualLocked**: The ALB instance is locked because the associated resources have overdue payments and the resources are released.
   * 
   * @example
   * FinancialLocked
   */
  lockType?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
      lockType: 'LockType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
      lockType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

