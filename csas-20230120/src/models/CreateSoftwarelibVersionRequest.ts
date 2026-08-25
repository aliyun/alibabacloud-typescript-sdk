// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSoftwarelibVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The MD5 value of the software package. The value can be up to 64 characters in length.
   * 
   * @example
   * 0b5824cdd509d3ed560e2d20d29a1bcb
   */
  md5?: string;
  /**
   * @remarks
   * The operating system to which the software package applies. Valid values:
   * - **Windows**: Windows.
   * - **Mac(Apple)**: macOS with Apple silicon.
   * - **Mac(Intel)**: macOS with Intel processors.
   * 
   * @example
   * Windows
   */
  os?: string;
  /**
   * @remarks
   * The software publisher type. Valid values:
   * - **local**: local upload.
   * - **thirdparty**: third-party link.
   * 
   * @example
   * local
   */
  publisherType?: string;
  /**
   * @remarks
   * The software ID in the software library. The value can be up to 64 characters in length. You can call [ListSoftwarelibSoftware](~~ListSoftwarelibSoftware~~) to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * softwarelib-software-2c51808a3cc8****
   */
  softwareId?: string;
  /**
   * @remarks
   * The software name. The value can be up to 128 characters in length.
   * 
   * @example
   * Thunder
   */
  softwareName?: string;
  /**
   * @remarks
   * The file name of the software package. The value can be up to 128 characters in length.
   * 
   * @example
   * TestSoftware.exe
   */
  softwarePkgName?: string;
  /**
   * @remarks
   * The size of the software package.
   * 
   * @example
   * 1000
   */
  softwarePkgSize?: number;
  /**
   * @remarks
   * The download URL of the software package. If the publisher type is local, the value is the relative path of the software package in the OSS bucket. If the publisher type is thirdparty, the value is a third-party download URL.
   */
  softwareUrl?: string;
  /**
   * @remarks
   * The software version number. The value can be up to 64 characters in length. The combination of operating system and version number must be unique within the same software. If a duplicate exists, a ResourceDuplicated error is returned.
   * 
   * @example
   * 1.0
   */
  softwareVersion?: string;
  static names(): { [key: string]: string } {
    return {
      md5: 'Md5',
      os: 'Os',
      publisherType: 'PublisherType',
      softwareId: 'SoftwareId',
      softwareName: 'SoftwareName',
      softwarePkgName: 'SoftwarePkgName',
      softwarePkgSize: 'SoftwarePkgSize',
      softwareUrl: 'SoftwareUrl',
      softwareVersion: 'SoftwareVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5: 'string',
      os: 'string',
      publisherType: 'string',
      softwareId: 'string',
      softwareName: 'string',
      softwarePkgName: 'string',
      softwarePkgSize: 'number',
      softwareUrl: 'string',
      softwareVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

