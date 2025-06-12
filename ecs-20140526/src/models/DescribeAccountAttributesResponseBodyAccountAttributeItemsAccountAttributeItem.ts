// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValues } from "./DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValues";


export class DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItem extends $dara.Model {
  /**
   * @remarks
   * The type of the resource quota in the specified region. Valid values:
   * 
   * *   instance-network-type: the available network types.
   * *   max-security-groups: the maximum number of security groups.
   * *   max-elastic-network-interfaces: the maximum number of ENIs.
   * *   max-postpaid-instance-vcpu-count: the maximum number of vCPUs for pay-as-you-go instances.
   * *   max-spot-instance-vcpu-count: the maximum number of vCPUs for spot instances.
   * *   used-postpaid-instance-vcpu-count: the number of vCPUs that were allocated to pay-as-you-go instances.
   * *   used-spot-instance-vcpu-count: the number of vCPUs that were allocated to spot instances.
   * *   max-postpaid-yundisk-capacity: the maximum capacity of pay-as-you-go data disks. (The value is deprecated.)
   * *   used-postpaid-yundisk-capacity: the capacity of pay-as-you-go data disks that were created. (The value is deprecated.)
   * *   max-dedicated-hosts: the maximum number of dedicated hosts.
   * *   supported-postpaid-instance-types: the instance types of pay-as-you-go I/O optimized instances.
   * *   max-axt-command-count: the maximum number of Cloud Assistant commands.
   * *   max-axt-invocation-daily: the maximum number of Cloud Assistant command executions per day.
   * *   real-name-authentication: whether the account completed the real-name verification.
   * *   max-cloud-assistant-activation-count: the maximum number of activation codes that can be created to use to register managed instances.
   * 
   * @example
   * max-security-groups
   */
  attributeName?: string;
  /**
   * @remarks
   * The values of resource quotas.
   */
  attributeValues?: DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValues;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValues: 'AttributeValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValues: DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValues,
    };
  }

  validate() {
    if(this.attributeValues && typeof (this.attributeValues as any).validate === 'function') {
      (this.attributeValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

