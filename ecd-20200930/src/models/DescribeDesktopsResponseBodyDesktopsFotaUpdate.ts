// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsResponseBodyDesktopsFotaUpdate extends $dara.Model {
  /**
   * @remarks
   * The current image version of the cloud computer.
   * 
   * @example
   * 0.0.0-D-20220102.000000
   */
  currentAppVersion?: string;
  /**
   * @remarks
   * The version number to which the image of the cloud computer can be updated.
   * 
   * @example
   * 0.0.0-R-20220307.190736
   */
  newAppVersion?: string;
  /**
   * @remarks
   * The description of the version to which the image of the cloud computer can be updated.
   * 
   * @example
   * Upgrade package for testing 03-07
   */
  releaseNote?: string;
  /**
   * @remarks
   * The English description of the version to which the image of the cloud computer can be updated.
   * 
   * @example
   * Release note
   */
  releaseNoteEn?: string;
  /**
   * @remarks
   * The Japanese description of the image version to which the cloud desktop can be updated.
   * 
   * @example
   * リリースノート
   */
  releaseNoteJp?: string;
  /**
   * @remarks
   * The size of the installation package for the image to which the cloud desktop can be updated. Unit: KB.
   * 
   * @example
   * 108815097
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      currentAppVersion: 'CurrentAppVersion',
      newAppVersion: 'NewAppVersion',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      releaseNoteJp: 'ReleaseNoteJp',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentAppVersion: 'string',
      newAppVersion: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      releaseNoteJp: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

