// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectTrafficQosResponseBodyQosListAssociatedInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to which the QoS policy is associated.
   * 
   * @example
   * pc-bp159zj8zujwy3p07j83e
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration progress of the instance to which the QoS policy is associated. Valid values: **0** to **100**.
   * 
   * @example
   * 100
   */
  instanceProgressing?: number;
  /**
   * @remarks
   * The state of the instance to which the QoS policy is associated. Valid values:
   * 
   * - **Normal**: The instance is available.
   * - **Configuring**: The instance is being configured.
   * - **Deleting**: The instance is being deleted.
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the instance to which the QoS policy is associated. Only **PHYSICALCONNECTION** is returned.
   * 
   * @example
   * PHYSICALCONNECTION
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceProgressing: 'InstanceProgressing',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceProgressing: 'number',
      instanceStatus: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

