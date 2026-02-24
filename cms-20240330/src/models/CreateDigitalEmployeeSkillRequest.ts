// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDigitalEmployeeSkillRequestFiles extends $dara.Model {
  /**
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
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * test
   */
  displayName?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  files?: CreateDigitalEmployeeSkillRequestFiles[];
  /**
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
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

