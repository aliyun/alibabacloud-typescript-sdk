// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentSkillMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword for fuzzy match.
   * 
   * @example
   * data-query-skill
   */
  searchKey?: string;
  /**
   * @remarks
   * The source of the skill. Valid values:
   * 
   * - User: a skill uploaded by the user.
   * - Agent: a skill derived from Agent analysis.
   * 
   * @example
   * User
   */
  skillFrom?: string;
  /**
   * @remarks
   * The skill ID.
   * 
   * @example
   * ski-04pomiln*************j0
   */
  skillId?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * data-query-skill
   */
  skillName?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * b5u96hud*************gq3
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      skillFrom: 'SkillFrom',
      skillId: 'SkillId',
      skillName: 'SkillName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      skillFrom: 'string',
      skillId: 'string',
      skillName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

