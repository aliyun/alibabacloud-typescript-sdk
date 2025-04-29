// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageRequestFeatures extends $dara.Model {
  /**
   * @remarks
   * The image metadata access mode. Valid values:
   * 
   * *   v1: You cannot set the image metadata access mode to security hardening when you create instances from the image.
   * *   v2: You can set the image metadata access mode to security hardening when you create instances from the image.
   * 
   * When you use a snapshot to create instances, the default value is set to 1. If you use an instance to create an image, the value of the ImdsSupport parameter is used by default.
   * 
   * @example
   * v2
   */
  imdsSupport?: string;
  static names(): { [key: string]: string } {
    return {
      imdsSupport: 'ImdsSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imdsSupport: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

