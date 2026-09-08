// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The unique ID of the skill.
   * 
   * @example
   * s-04rj8mzqj1fu****
   */
  skillId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      skillId: 'SkillId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      skillId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

