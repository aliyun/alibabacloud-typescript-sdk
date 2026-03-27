// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDigitalEmployeeSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @example
   * skill
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      skillName: 'skillName',
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

