// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResourcesResponseBodyResourcesFotaUpdate extends $dara.Model {
  /**
   * @example
   * aliyun
   */
  channel?: string;
  /**
   * @example
   * 2.7.0-R-20250122.154826
   */
  currentAppVersion?: string;
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @example
   * 2.7.0-R-20250125.154826
   */
  newAppVersion?: string;
  /**
   * @example
   * 2.6.9-R-20250123.153415
   */
  newDcdVersion?: string;
  /**
   * @example
   * wuying-asp_single_session_desktop_win_x64
   */
  project?: string;
  /**
   * @example
   * up
   */
  releaseNote?: string;
  /**
   * @example
   * up
   */
  releaseNoteEn?: string;
  /**
   * @example
   * up
   */
  releaseNoteJp?: string;
  /**
   * @example
   * 474981930
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

