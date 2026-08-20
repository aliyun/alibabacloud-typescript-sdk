// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the complete file tree. Default value: False. This avoids large response payloads.
   * 
   * @example
   * false
   */
  includeSkillFiles?: boolean;
  /**
   * @remarks
   * The skill code. This parameter has a value when type is set to skill.
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * string_value
   */
  skillName?: string;
  /**
   * @remarks
   * The tenant ID to which the task belongs.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The view mode. Valid values: draft (draft/editing view) or published (published view, default).
   * 
   * @example
   * draft
   */
  viewMode?: string;
  static names(): { [key: string]: string } {
    return {
      includeSkillFiles: 'includeSkillFiles',
      skillCode: 'skillCode',
      skillName: 'skillName',
      tenantId: 'tenantId',
      viewMode: 'viewMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeSkillFiles: 'boolean',
      skillCode: 'string',
      skillName: 'string',
      tenantId: 'string',
      viewMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

