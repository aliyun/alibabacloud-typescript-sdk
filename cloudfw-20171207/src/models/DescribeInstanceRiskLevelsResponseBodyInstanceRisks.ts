// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceRiskLevelsResponseBodyInstanceRisksDetails } from "./DescribeInstanceRiskLevelsResponseBodyInstanceRisksDetails";


export class DescribeInstanceRiskLevelsResponseBodyInstanceRisks extends $dara.Model {
  /**
   * @remarks
   * The risk levels of the Elastic Compute Service (ECS) instance.
   */
  details?: DescribeInstanceRiskLevelsResponseBodyInstanceRisksDetails[];
  /**
   * @remarks
   * The instance ID of your Cloud Firewall.
   * 
   * @example
   * vipcloudfw-cn-7mz2fj8nm0u
   */
  instanceId?: string;
  /**
   * @remarks
   * The risk levels. Valid values:
   * 
   * *   **medium**
   * 
   * @example
   * medium
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      instanceId: 'InstanceId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': DescribeInstanceRiskLevelsResponseBodyInstanceRisksDetails },
      instanceId: 'string',
      level: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

