// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebOSSMountPoint extends $dara.Model {
  bucketName?: string;
  bucketPath?: string;
  mountDir?: string;
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

