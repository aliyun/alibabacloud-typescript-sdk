// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarClawSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the skill.
   * 
   * @example
   * polarclawhub
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

