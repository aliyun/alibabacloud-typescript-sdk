// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillDraftRequestBody extends $dara.Model {
  /**
   * @remarks
   * The version from which the draft is derived. If you leave this parameter empty, a new skill is created.
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
   * The JSON string of the skill card, which contains the complete skill information.
   * 
   * @example
   * {"name":"customer-service-skill","description":"..."}
   */
  skillCard?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * This parameter is required.
   * 
   * @example
   * customer-service-skill
   */
  skillName?: string;
  /**
   * @remarks
   * The target version number of the draft. If you do not specify this parameter, the version number automatically increments.
   * 
   * @example
   * 0.0.2
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      basedOnVersion: 'basedOnVersion',
      commitMsg: 'commitMsg',
      skillCard: 'skillCard',
      skillName: 'skillName',
      targetVersion: 'targetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basedOnVersion: 'string',
      commitMsg: 'string',
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

export class CreateSkillDraftRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: CreateSkillDraftRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateSkillDraftRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

