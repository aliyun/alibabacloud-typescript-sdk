// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey secret used to access cloud resources.
   * 
   * >  You can call the [ListCloudAccess](https://help.aliyun.com/document_detail/2712219.html) operation to obtain the ID.
   * 
   * @example
   * AKID9*******XX
   */
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

