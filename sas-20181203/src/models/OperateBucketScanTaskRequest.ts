// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateBucketScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * iboxpublic****
   */
  bucketName?: string;
  /**
   * @remarks
   * The operation that you want to perform on the bucket. Valid value:
   * 
   * *   **1**: cancels the bucket check.
   * 
   * @example
   * 1
   */
  operateCode?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      operateCode: 'OperateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      operateCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

