// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the skill.
   * 
   * @example
   * code-review
   */
  name?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot the request.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * The skill ID.
   * 
   * @example
   * skill_example123
   */
  skillId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. true is returned when the skill and its body or bundle are fully created and readable. Business failures are returned in error responses.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The update time after the skill is created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1760000100000
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
      skillId: 'SkillId',
      success: 'Success',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
      skillId: 'string',
      success: 'boolean',
      updatedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

