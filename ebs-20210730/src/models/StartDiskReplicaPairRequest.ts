// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDiskReplicaPairRequest extends $dara.Model {
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
   * Specifies whether to immediately synchronize data. Valid values:
   * 
   * *   true: immediately synchronizes data.
   * *   false: synchronizes data based on the recovery point objective (RPO).
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  oneShot?: boolean;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the region information of replication pairs.
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
      clientToken: 'ClientToken',
      oneShot: 'OneShot',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      oneShot: 'boolean',
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

