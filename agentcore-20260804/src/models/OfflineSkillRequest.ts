// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineSkillRequestBody extends $dara.Model {
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
   * The Skill version number.
   * 
   * @example
   * 0.0.1
   */
  skillVersion?: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
      skillVersion: 'skillVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
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

export class OfflineSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: OfflineSkillRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: OfflineSkillRequestBody,
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

