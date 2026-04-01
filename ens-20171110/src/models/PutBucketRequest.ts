// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutBucketRequest extends $dara.Model {
  /**
   * @remarks
   * The access control list (ACL) of the bucket. private public-read-write public-read
   * 
   * @example
   * private
   */
  bucketAcl?: string;
  /**
   * @remarks
   * The name of the bucket. This parameter can contain 3 to 50 characters in length and can contain only lowercase letters, digits, and hyphens (-). The name cannot start or end with a hyphen (-).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  bucketName?: string;
  /**
   * @remarks
   * The description. The description can be 0 to 128 characters in length, and can contain Chinese characters and emoticons.
   * 
   * @example
   * numb
   */
  comment?: string;
  /**
   * @remarks
   * The scheduling scope. This parameter takes effect only when the value of the LogicalBucketType parameter is standard. Valid values:
   * 
   * *   **domestic**: Chinese mainland.
   * *   **oversea**: outside the Chinese mainland.
   * 
   * @example
   * domestic
   */
  dispatchScope?: string;
  /**
   * @remarks
   * The ID of the region where the node is located. If this parameter is not specified, the node is the global default node.
   * 
   * @example
   * cn-beijing-15
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The type of the logical bucket. Valid values: sink standard (default)
   * 
   * @example
   * sink
   */
  logicalBucketType?: string;
  static names(): { [key: string]: string } {
    return {
      bucketAcl: 'BucketAcl',
      bucketName: 'BucketName',
      comment: 'Comment',
      dispatchScope: 'DispatchScope',
      ensRegionId: 'EnsRegionId',
      logicalBucketType: 'LogicalBucketType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketAcl: 'string',
      bucketName: 'string',
      comment: 'string',
      dispatchScope: 'string',
      ensRegionId: 'string',
      logicalBucketType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

