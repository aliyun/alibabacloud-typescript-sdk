// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReverseDtsJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization or migration task. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * n99m9jx822k****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The ID of the resource group. This is a global parameter that does not need to be specified for this operation.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The password of the shard in a MongoDB sharded cluster instance.
   * 
   * > - This parameter is available and required only when the source database instance is a MongoDB sharded cluster instance.
   * - This parameter takes effect only when **ModifyAccount** is set to **true**.
   * 
   * @example
   * DTStest****
   */
  shardPassword?: string;
  /**
   * @remarks
   * The account of the shard in a MongoDB sharded cluster instance.
   * 
   * @example
   * dtstest
   */
  shardUsername?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      resourceGroupId: 'ResourceGroupId',
      shardPassword: 'ShardPassword',
      shardUsername: 'ShardUsername',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      resourceGroupId: 'string',
      shardPassword: 'string',
      shardUsername: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

