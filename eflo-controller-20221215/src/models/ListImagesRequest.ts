// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesRequest extends $dara.Model {
  /**
   * @remarks
   * Architecture
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * Image version
   * 
   * @example
   * 7.9
   */
  imageVersion?: string;
  /**
   * @remarks
   * Platform
   * 
   * @example
   * ALinux3
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      imageVersion: 'ImageVersion',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      imageVersion: 'string',
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

