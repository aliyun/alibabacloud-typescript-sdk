// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDigitalEmployeeSkillRequestFiles extends $dara.Model {
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

export class UpdateDigitalEmployeeSkillRequest extends $dara.Model {
  /**
   * @remarks
   * Description
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Display name
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * Is enabled
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * List of skill files
   * 
   * This parameter is required.
   */
  files?: UpdateDigitalEmployeeSkillRequestFiles[];
  /**
   * @remarks
   * Remark
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

