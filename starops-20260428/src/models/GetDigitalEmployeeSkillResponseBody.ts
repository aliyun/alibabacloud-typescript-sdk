// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDigitalEmployeeSkillResponseBodyFiles extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * ---
   * name: skill
   * description: description
   * ---
   * 
   * # skill 
   * 
   * skill test
   */
  content?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SKILL.md
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDigitalEmployeeSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time in RFC 3339 format with the UTC time zone.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-02-06T14:09:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the skill.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the skill.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the skill is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of skill files.
   */
  files?: GetDigitalEmployeeSkillResponseBodyFiles[];
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * test
   */
  skillName?: string;
  /**
   * @remarks
   * The update time in RFC 3339 format with the UTC time zone.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-02-06T14:09:11Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1770386951147366810
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      files: 'files',
      remark: 'remark',
      requestId: 'requestId',
      skillName: 'skillName',
      updateTime: 'updateTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      files: { 'type': 'array', 'itemType': GetDigitalEmployeeSkillResponseBodyFiles },
      remark: 'string',
      requestId: 'string',
      skillName: 'string',
      updateTime: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

