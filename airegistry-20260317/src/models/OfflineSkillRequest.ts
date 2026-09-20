// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineSkillRequest extends $dara.Model {
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
   * The operation scope. Valid values:
   * - skill: the entire Skill.
   * - version: a specified version.
   * 
   * @example
   * version
   */
  scope?: string;
  /**
   * @remarks
   * The Skill name.
   * 
   * This parameter is required.
   * 
   * @example
   * customer-service-skill
   */
  skillName?: string;
  /**
   * @remarks
   * The version number. This parameter is required when scope is set to version.
   * 
   * @example
   * 0.0.2
   */
  skillVersion?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      scope: 'Scope',
      skillName: 'SkillName',
      skillVersion: 'SkillVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      scope: 'string',
      skillName: 'string',
      skillVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

