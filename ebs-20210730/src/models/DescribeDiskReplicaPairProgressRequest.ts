// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskReplicaPairProgressRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html)operation to query the IDs of existing replication pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-tl32ribst0z
   */
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

