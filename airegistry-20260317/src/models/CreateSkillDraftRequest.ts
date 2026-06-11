// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillDraftRequest extends $dara.Model {
  /**
   * @example
   * 0.0.1
   */
  basedOnVersion?: string;
  /**
   * @example
   * 初始版本
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
  /**
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

