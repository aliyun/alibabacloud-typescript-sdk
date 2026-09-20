// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadSkillViaOssRequest extends $dara.Model {
  /**
   * @remarks
   * The commit message. This parameter is optional.
   */
  commitMsg?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @remarks
   * The OSS object name (path).
   * 
   * This parameter is required.
   */
  ossObjectName?: string;
  /**
   * @remarks
   * Specifies whether to overwrite an existing skill. Default value: false.
   * 
   * @example
   * false
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The target upload version number. This parameter is optional and used as a fallback when the ZIP file contains no version information.
   * 
   * @example
   * 1.0.0
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      commitMsg: 'CommitMsg',
      namespaceId: 'NamespaceId',
      ossObjectName: 'OssObjectName',
      overwrite: 'Overwrite',
      targetVersion: 'TargetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitMsg: 'string',
      namespaceId: 'string',
      ossObjectName: 'string',
      overwrite: 'boolean',
      targetVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

