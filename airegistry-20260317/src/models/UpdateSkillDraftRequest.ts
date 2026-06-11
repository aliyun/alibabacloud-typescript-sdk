// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillDraftRequest extends $dara.Model {
  /**
   * @example
   * 更新说明
   */
  commitMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"name":"customer-service-skill","description":"..."}
   */
  skillCard?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * customer-service-skill
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      commitMsg: 'CommitMsg',
      namespaceId: 'NamespaceId',
      skillCard: 'SkillCard',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitMsg: 'string',
      namespaceId: 'string',
      skillCard: 'string',
      skillName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

