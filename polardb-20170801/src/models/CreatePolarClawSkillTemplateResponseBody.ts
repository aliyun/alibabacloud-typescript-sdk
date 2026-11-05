// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawSkillTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EBEAA83D-1734-42E3-85E3-E25F6E******
   */
  requestId?: string;
  /**
   * @remarks
   * The skill template ID.
   * 
   * @example
   * pcpg-skill-**************
   */
  skillTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      skillTemplateId: 'SkillTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      skillTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

