// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity extends $dara.Model {
  /**
   * @remarks
   * The number of ECS instances that can be added to the deployment set within the zone.
   * 
   * @example
   * 18
   */
  availableAmount?: number;
  /**
   * @remarks
   * The number of ECS instances that reside in the zone in the deployment set.
   * 
   * @example
   * 2
   */
  usedAmount?: number;
  /**
   * @remarks
   * The ID of the zone. Only the zone IDs of existing ECS instances in the deployment set are returned.
   * 
   * @example
   * cn-hangzhou-i
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

