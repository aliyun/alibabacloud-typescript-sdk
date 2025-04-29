// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDiskReplicaPairRequestTag } from "./CreateDiskReplicaPairRequestTag";


export class CreateDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth to use to asynchronously replicate data between the primary disk and secondary disk. Unit: Kbit/s. Valid values:
   * 
   * *   10240 : equal to 10 Mbit/s
   * *   20480 : equal to 20 Mbit/s
   * *   51200 : equal to 50 Mbit/s
   * *   102400 : equal to 100 Mbit/s
   * 
   * Default value: 10240.
   * 
   * When you set the ChargeType parameter to POSTPAY, the Bandwidth parameter is automatically set to 0 and cannot be modified. The value 0 indicates that bandwidth is dynamically allocated based on the volume of data that is asynchronously replicated from the primary disk to the secondary disk.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the replication pair. Valid values:
   * 
   * *   PREPAY: subscription
   * *   POSTPAY: pay-as-you-go
   * 
   * Default value: POSTPAY.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the replication pair. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the secondary disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-sa1f82p58p1tdw9g****
   */
  destinationDiskId?: string;
  /**
   * @remarks
   * The region ID of the secondary disk. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The zone ID of the secondary disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-e
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The ID of the primary disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-iq80sgp4d0xbk24q****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the replication pair. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * TestReplicaPair
   */
  pairName?: string;
  /**
   * @remarks
   * The subscription duration of the replication pair. This parameter is required when the `ChargeType` parameter is set to PREPAY. The unit of the subscription duration is specified by the `PeriodUnit` parameter.
   * 
   * *   Valid values when the `PeriodUnit` parameter is set to Week: 1, 2, 3, and 4.
   * *   Valid values when the `PeriodUnit` parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration of the replication pair. Valid values:
   * 
   * *   Week.
   * *   Month
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The recovery point objective (RPO) of the replication pair. Unit: seconds. Set the value to 900.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The ID of the region in which to create the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the replication group.
   * 
   * @example
   * rg-acfmvs****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The zone ID of the primary disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-f
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The resource tags. You can specify up to 20 tags.
   */
  tag?: CreateDiskReplicaPairRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      description: 'Description',
      destinationDiskId: 'DestinationDiskId',
      destinationRegionId: 'DestinationRegionId',
      destinationZoneId: 'DestinationZoneId',
      diskId: 'DiskId',
      pairName: 'PairName',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      RPO: 'RPO',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceZoneId: 'SourceZoneId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      chargeType: 'string',
      clientToken: 'string',
      description: 'string',
      destinationDiskId: 'string',
      destinationRegionId: 'string',
      destinationZoneId: 'string',
      diskId: 'string',
      pairName: 'string',
      period: 'number',
      periodUnit: 'string',
      RPO: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceZoneId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDiskReplicaPairRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

