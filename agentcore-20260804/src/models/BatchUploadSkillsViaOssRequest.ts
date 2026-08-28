// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUploadSkillsViaOssRequestBody extends $dara.Model {
  /**
   * @remarks
   * The OSS object name (path).
   * 
   * This parameter is required.
   * 
   * @example
   * skill/import/user123/ns-123456/2026/04/20/uuid/skills.zip
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
  static names(): { [key: string]: string } {
    return {
      ossObjectName: 'ossObjectName',
      overwrite: 'overwrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossObjectName: 'string',
      overwrite: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadSkillsViaOssRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: BatchUploadSkillsViaOssRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: BatchUploadSkillsViaOssRequestBody,
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

