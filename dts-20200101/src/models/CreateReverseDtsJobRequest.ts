// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReverseDtsJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization or migration task, which can be queried by calling [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html).
   * 
   * This parameter is required.
   * 
   * @example
   * n99m9jx822k****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * Resource GroupId
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Shard Password
   * 
   * @example
   * DTStest****
   */
  shardPassword?: string;
  /**
   * @remarks
   * Shard User name
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

