// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity extends $dara.Model {
  /**
   * @remarks
   * The number of RDS Custom instances that reside in the zone and can be added to the deployment set.
   * 
   * @example
   * 18
   */
  availableAmount?: number;
  /**
   * @remarks
   * The number of RDS Custom instances that reside in the zone in the deployment set.
   * 
   * @example
   * 2
   */
  usedAmount?: number;
  /**
   * @remarks
   * The zone ID. Only the IDs of the zones to which the existing RDS Custom instances in the deployment set belong are returned.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      usedAmount: 'UsedAmount',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'number',
      usedAmount: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

