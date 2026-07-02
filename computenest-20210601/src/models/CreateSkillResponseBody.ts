// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A17F9930-E2DC-5E87-B6D6-B0BCD2B00834
   */
  requestId?: string;
  /**
   * @remarks
   * Skill ID
   * 
   * @example
   * s-051j4ot2aerr5dyc4
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

