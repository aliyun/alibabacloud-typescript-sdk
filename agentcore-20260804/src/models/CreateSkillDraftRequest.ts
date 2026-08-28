// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillDraftRequestBody extends $dara.Model {
  /**
   * @remarks
   * The version from which to fork the draft. If not specified, a new Skill is created.
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
   * The Skill card JSON string that contains the complete Skill information.
   * 
   * @example
   * {"name":"customer-service-skill","description":"..."}
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
   * The draft version number to assign. If not specified, the version number is automatically incremented.
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

