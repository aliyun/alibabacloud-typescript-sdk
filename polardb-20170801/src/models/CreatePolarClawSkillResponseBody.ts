// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * Used for system scheduled task checks. Modifications are not supported for the current scheduled task.
   * 
   * @example
   * true
   */
  isUpdate?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
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
      isUpdate: 'IsUpdate',
      requestId: 'RequestId',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isUpdate: 'string',
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

