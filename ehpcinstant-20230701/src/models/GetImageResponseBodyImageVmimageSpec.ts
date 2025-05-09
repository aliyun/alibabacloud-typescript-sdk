// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageResponseBodyImageVMImageSpec extends $dara.Model {
  /**
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @example
   * m-uf60twafjtaart******
   */
  imageId?: string;
  /**
   * @example
   * CentOS  7.6 64 bit
   */
  osTag?: string;
  /**
   * @example
   * CentOS
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      imageId: 'ImageId',
      osTag: 'OsTag',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      imageId: 'string',
      osTag: 'string',
      platform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

