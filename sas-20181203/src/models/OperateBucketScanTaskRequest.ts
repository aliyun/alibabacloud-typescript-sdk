// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateBucketScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * iboxpublic****
   */
  bucketName?: string;
  /**
   * @remarks
   * The operation to perform on the bucket. Valid values:
   * 
   * - **1**: Cancel detection.
   * 
   * @example
   * 1
   */
  operateCode?: number;
  /**
   * @remarks
   * The business source. Valid values:
   * - **OSS**: OSS
   * - **NAS**: NAS
   * 
   * @example
   * OSS
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      operateCode: 'OperateCode',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      operateCode: 'number',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

