// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDigitalEmployeeSkillResponseBodyFiles extends $dara.Model {
  /**
   * @remarks
   * File content
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
   * File name
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
   * Creation time
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-02-06T14:09:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * Skill description
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Skill display name
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * Whether the skill is enabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Skill file list
   */
  files?: GetDigitalEmployeeSkillResponseBodyFiles[];
  /**
   * @remarks
   * Remarks
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * Skill name
   * 
   * @example
   * test
   */
  skillName?: string;
  /**
   * @remarks
   * Update time
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-02-06T14:09:11Z
   */
  updateTime?: string;
  /**
   * @remarks
   * Version number
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

