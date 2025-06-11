// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigsSecurityConfigs } from "./DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigsSecurityConfigs";


export class DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigs extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the check.
   * 
   * @example
   * xxx
   */
  checkId?: string;
  /**
   * @remarks
   * The time when the check was performed.
   * 
   * @example
   * 2023-08-07 15:30:00
   */
  checkTime?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of check items.
   */
  securityConfigs?: DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigsSecurityConfigs[];
  /**
   * @remarks
   * The total number of security check items for the cluster.
   * 
   * @example
   * 5
   */
  totalCheckCount?: number;
  /**
   * @remarks
   * The total number of detected cluster security risks.
   * 
   * @example
   * 0
   */
  totalRiskCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkTime: 'CheckTime',
      instanceId: 'InstanceId',
      securityConfigs: 'SecurityConfigs',
      totalCheckCount: 'TotalCheckCount',
      totalRiskCount: 'TotalRiskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkTime: 'string',
      instanceId: 'string',
      securityConfigs: { 'type': 'array', 'itemType': DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigsSecurityConfigs },
      totalCheckCount: 'number',
      totalRiskCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.securityConfigs)) {
      $dara.Model.validateArray(this.securityConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

