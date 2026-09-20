// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillDraftRequest extends $dara.Model {
  /**
   * @remarks
   * The version to fork from. If not specified, a new Skill is created based on the latest version.
   * 
   * @example
   * 0.0.1
   */
  basedOnVersion?: string;
  /**
   * @remarks
   * The commit message.
   * 
   * @example
   * Initial version
   */
  commitMsg?: string;
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
   * The Skill card JSON string that contains complete Skill information.
   * 
   * @example
   * {"name":"customer-service-skill","description":"customer-skill-desc","skillMd":"---\\nname: customer-service-skill\\ndescription: customer-skill-desc\\n---\\ncustomer-skill-content"}
   */
  skillCard?: string;
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
   * The specified draft version number. If not specified, the version number auto-increments.
   * 
   * @example
   * 0.0.2
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      basedOnVersion: 'BasedOnVersion',
      commitMsg: 'CommitMsg',
      namespaceId: 'NamespaceId',
      skillCard: 'SkillCard',
      skillName: 'SkillName',
      targetVersion: 'TargetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basedOnVersion: 'string',
      commitMsg: 'string',
      namespaceId: 'string',
      skillCard: 'string',
      skillName: 'string',
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

