// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutBucketRequest extends $dara.Model {
  /**
   * @remarks
   * Bucket permission type: private (default). public-read-write: Allows public read and write access. public-read: Allows public read access.
   * 
   * @example
   * private
   */
  bucketAcl?: string;
  /**
   * @remarks
   * Bucket name. Must be 3 to 50 characters long. Use only lowercase letters, numbers, and hyphens (-). Cannot start or end with a hyphen.
   * 
   * This parameter is required.
   * 
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * Comment. Up to 128 characters, including letters, digits, Chinese characters, and emojis.
   * 
   * @example
   * this is comment
   */
  comment?: string;
  /**
   * @remarks
   * Scheduling scope. Valid values:
   * 
   * - domestic (within China)
   * 
   * - outside China
   * 
   * > You must specify this parameter when creating a global bucket.
   * 
   * @example
   * sink
   */
  dispatchScope?: string;
  /**
   * @remarks
   * Edge zone ID. If not specified, the global default edge zone is used.
   * 
   * @example
   * xx-xx-xx
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The logical type of the bucket. Valid values: sink: A sink bucket on a specified node. standard: A standard global bucket. This is the default value.
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

