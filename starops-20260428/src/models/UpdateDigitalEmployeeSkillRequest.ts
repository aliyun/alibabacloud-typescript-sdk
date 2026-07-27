// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDigitalEmployeeSkillRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The content of the skill file.
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
   * The name of the skill file.
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

export class UpdateDigitalEmployeeSkillRequest extends $dara.Model {
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
   * Specifies whether the skill is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * An array of skill files.
   * 
   * This parameter is required.
   */
  files?: UpdateDigitalEmployeeSkillRequestFiles[];
  /**
   * @remarks
   * Notes or comments about the skill.
   * 
   * @example
   * remark
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      files: 'files',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      files: { 'type': 'array', 'itemType': UpdateDigitalEmployeeSkillRequestFiles },
      remark: 'string',
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

