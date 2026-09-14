// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiskReplicaPairRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth for asynchronous data replication between disks. The unit is Kbps. Valid values:
   * 
   * - 10240
   * 
   * - 20480
   * 
   * - 51200
   * 
   * - 102400
   * 
   * Default value: 10240.
   * When ChargeType is set to POSTPAY, you cannot specify this parameter. The system uses a value of 0, which means that the bandwidth is dynamically allocated based on data writes.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the replication pair. Valid values:
   * 
   * - PREPAY: subscription.
   * 
   * - POSTPAY: pay-as-you-go.
   * 
   * Default value: POSTPAY.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a value from your client to make sure that the value is unique among different requests. The ClientToken parameter can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the replication pair. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the destination disk (secondary disk).
   * 
   * This parameter is required.
   * 
   * @example
   * d-sa1f82p58p1tdw9g****
   */
  destinationDiskId?: string;
  /**
   * @remarks
   * The region ID of the destination disk (secondary disk). You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the regions that support asynchronous replication.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The zone ID of the destination disk (secondary disk).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-e
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The ID of the source disk (primary disk).
   * 
   * This parameter is required.
   * 
   * @example
   * d-iq80sgp4d0xbk24q****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to enable replication time control (RTC). Valid values:
   * 
   * - false: Disables RTC.
   * 
   * - true: Enables RTC.
   * 
   * Default value: false.
   * 
   * > If the replication pair is added to a replication group, the setting of this parameter is the same as that of the replication group.
   * 
   * @example
   * true
   */
  enableRtc?: boolean;
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
   * The subscription duration of the replication pair. This parameter is required when `ChargeType` is set to PREPAY. The unit of the duration is specified by `PeriodUnit`. Valid values: 1, 2, 3, 6, 12, 24, 36, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The recovery point objective (RPO) of the replication pair. The unit is seconds. Currently, only 900 is supported.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The region ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair belongs.
   * 
   * @example
   * rg-acfmvs****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The zone ID of the source disk (primary disk).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-f
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The list of tags. You can specify up to 20 tags.
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
      enableRtc: 'EnableRtc',
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
      enableRtc: 'boolean',
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

