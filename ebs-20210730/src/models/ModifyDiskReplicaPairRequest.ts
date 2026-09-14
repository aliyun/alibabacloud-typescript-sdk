// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth for async replication, in Kbps.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a value for this parameter from your client. Make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the replication pair.
   * 
   * @example
   * This is description.
   */
  description?: string;
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
   * > If a replication pair is part of a replication group, its RTC setting is the same as the setting of the group.
   * 
   * @example
   * true
   */
  enableRtc?: boolean;
  /**
   * @remarks
   * The name of the replication pair.
   * 
   * @example
   * TestReplicaPair
   */
  pairName?: string;
  /**
   * @remarks
   * The recovery point objective (RPO) of the replication pair-consistent group. Unit: seconds. Currently, only a value of 900 is supported.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) to query the regions that support async replication.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      enableRtc: 'EnableRtc',
      pairName: 'PairName',
      RPO: 'RPO',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      enableRtc: 'boolean',
      pairName: 'string',
      RPO: 'number',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

