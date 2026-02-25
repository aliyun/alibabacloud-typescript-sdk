// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebOSSMountPoint extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * gcx-pic-test
   */
  bucketName?: string;
  /**
   * @remarks
   * The storage path in an OSS bucket.
   * 
   * @example
   * billing-2023-11-06_17:30:18-rn7wG8
   */
  bucketPath?: string;
  /**
   * @remarks
   * The local mount directory.
   * 
   * @example
   * /k8s-prod/oms-api-yy-prod/log
   */
  mountDir?: string;
  /**
   * @remarks
   * Specifies whether it is read-only.
   * 
   * @example
   * true
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      bucketPath: 'BucketPath',
      mountDir: 'MountDir',
      readOnly: 'ReadOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      mountDir: 'string',
      readOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

