// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value. Unit: Kbit/s.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
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
   * The recovery point objective (RPO) of the replication pair-consistent group. Unit: seconds. Valid value: 900.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
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

