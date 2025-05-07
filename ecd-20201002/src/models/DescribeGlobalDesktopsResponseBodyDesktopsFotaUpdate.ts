// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate extends $dara.Model {
  /**
   * @example
   * Enterprise
   */
  channel?: string;
  /**
   * @example
   * 0.0.0-D-20220102.xxxx
   */
  currentAppVersion?: string;
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @example
   * 0.0.0-R-20220307.xxxx
   */
  newAppVersion?: string;
  newDcdVersion?: string;
  /**
   * @example
   * testProject
   */
  project?: string;
  releaseNote?: string;
  releaseNoteEn?: string;
  releaseNoteJp?: string;
  /**
   * @example
   * 100
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      currentAppVersion: 'CurrentAppVersion',
      force: 'Force',
      newAppVersion: 'NewAppVersion',
      newDcdVersion: 'NewDcdVersion',
      project: 'Project',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      releaseNoteJp: 'ReleaseNoteJp',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      currentAppVersion: 'string',
      force: 'boolean',
      newAppVersion: 'string',
      newDcdVersion: 'string',
      project: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      releaseNoteJp: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

