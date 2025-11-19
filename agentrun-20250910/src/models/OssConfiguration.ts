// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OssConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bucketName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mountPoint?: string;
  permission?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      mountPoint: 'mountPoint',
      permission: 'permission',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      mountPoint: 'string',
      permission: 'string',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

