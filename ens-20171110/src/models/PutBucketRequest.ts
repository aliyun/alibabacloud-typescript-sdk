// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutBucketRequest extends $dara.Model {
  bucketAcl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bucketName?: string;
  comment?: string;
  dispatchScope?: string;
  ensRegionId?: string;
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

