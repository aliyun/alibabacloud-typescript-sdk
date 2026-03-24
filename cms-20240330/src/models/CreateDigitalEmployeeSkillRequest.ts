// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDigitalEmployeeSkillRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The content of the file.
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
   * The name of the file.
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

export class CreateDigitalEmployeeSkillRequest extends $dara.Model {
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
   * Specifies whether to enable the skill.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of skill files.
   * 
   * This parameter is required.
   */
  files?: CreateDigitalEmployeeSkillRequestFiles[];
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
   * The name of the skill.
   * 
   * This parameter is required.
   * 
   * @example
   * skill
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      files: 'files',
      remark: 'remark',
      skillName: 'skillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      files: { 'type': 'array', 'itemType': CreateDigitalEmployeeSkillRequestFiles },
      remark: 'string',
      skillName: 'string',
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

