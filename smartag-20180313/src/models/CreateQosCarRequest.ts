// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosCarRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the traffic throttling rule.
   * 
   * @example
   * Qosdesc
   */
  description?: string;
  /**
   * @remarks
   * The type of the traffic throttling rule. Valid values:
   * 
   * *   **Absolute**: throttles traffic based on a specific range of bandwidth values.
   * *   **Percent**: throttles traffic based on a specific range of bandwidth percentage.
   * 
   * This parameter is required.
   * 
   * @example
   * Absolute
   */
  limitType?: string;
  /**
   * @remarks
   * The maximum bandwidth value. The value must be an integer. Unit: Mbit/s.
   * 
   * This parameter is returned when **LimitType** is set to **Absolute**.
   * 
   * >  The maximum bandwidth value must be greater than the minimum bandwidth value.
   * 
   * @example
   * 6
   */
  maxBandwidthAbs?: number;
  /**
   * @remarks
   * The maximum bandwidth percentage. Unit: percent (%). Valid values: **1 to 100**.
   * 
   * This parameter is required when you set **LimitType** to **Percent**.
   * 
   * >  The maximum bandwidth percentage must be greater than the minimum bandwidth percentage.
   * 
   * @example
   * 90
   */
  maxBandwidthPercent?: number;
  /**
   * @remarks
   * The minimum bandwidth value. The value must be an integer. Unit: Mbit/s.
   * 
   * This parameter is returned when **LimitType** is set to **Absolute**.
   * 
   * @example
   * 2
   */
  minBandwidthAbs?: number;
  /**
   * @remarks
   * The minimum bandwidth percentage. Unit: percent (%). Valid values: **1 to 100**.
   * 
   * This parameter is required when you set **LimitType** to **Percent**.
   * 
   * @example
   * 20
   */
  minBandwidthPercent?: number;
  /**
   * @remarks
   * The name of the traffic throttling rule.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * nametest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The type of bandwidth when traffic is throttled based on bandwidth percentage. Valid values:
   * 
   * *   **CcnBandwidth**: CCN bandwidth
   * *   **InternetUpBandwidth**: total Internet bandwidth
   * 
   * @example
   * CcnBandwidth
   */
  percentSourceType?: string;
  /**
   * @remarks
   * The priority of the traffic throttling rule.
   * 
   * Valid values: **1** to **3**. A smaller value indicates a higher priority. If rules have the same priority, the one created the earliest is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-xitd8690ucu8ro****
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the region to which the QoS policy belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      limitType: 'LimitType',
      maxBandwidthAbs: 'MaxBandwidthAbs',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      minBandwidthAbs: 'MinBandwidthAbs',
      minBandwidthPercent: 'MinBandwidthPercent',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      percentSourceType: 'PercentSourceType',
      priority: 'Priority',
      qosId: 'QosId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      limitType: 'string',
      maxBandwidthAbs: 'number',
      maxBandwidthPercent: 'number',
      minBandwidthAbs: 'number',
      minBandwidthPercent: 'number',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      percentSourceType: 'string',
      priority: 'number',
      qosId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

