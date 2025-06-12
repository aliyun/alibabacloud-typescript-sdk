// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResultInstanceIds } from "./CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResultInstanceIds";


export class CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResult extends $dara.Model {
  /**
   * @remarks
   * The number of created instances.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The error code returned when the instance cannot be created.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the instance cannot be created.
   * 
   * @example
   * Specific parameter is not valid.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The IDs of created instances.
   */
  instanceIds?: CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResultInstanceIds;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. Valid values:
   * 
   * *   NoSpot: The instance is a regular pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is a spot instance for which you specify the maximum hourly price.
   * *   SpotAsPriceGo: The instance is a spot instance for which the market price at the time of purchase is used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      instanceIds: 'InstanceIds',
      instanceType: 'InstanceType',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      errorCode: 'string',
      errorMsg: 'string',
      instanceIds: CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResultInstanceIds,
      instanceType: 'string',
      spotStrategy: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

