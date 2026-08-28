// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadSkillViaOssRequestBody extends $dara.Model {
  /**
   * @remarks
   * The commit message. This parameter is optional.
   * 
   * @example
   * Update documentation
   */
  commitMsg?: string;
  /**
   * @remarks
   * The OSS object name (path).
   * 
   * This parameter is required.
   * 
   * @example
   * imports/example.zip
   */
  ossObjectName?: string;
  /**
   * @remarks
   * Specifies whether to overwrite an existing Skill. Default value: false.
   * 
   * @example
   * false
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The upload version number. This parameter is optional and used as a fallback when the ZIP package contains no version information.
   * 
   * @example
   * 1.0.0
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      commitMsg: 'commitMsg',
      ossObjectName: 'ossObjectName',
      overwrite: 'overwrite',
      targetVersion: 'targetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitMsg: 'string',
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

export class UploadSkillViaOssRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UploadSkillViaOssRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UploadSkillViaOssRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

