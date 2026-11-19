// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the skill.
   * 
   * @example
   * code-review
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
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
   * Indicates whether the operation is successful. A value of `true` is returned when the skill update and optional bundle replacement are fully submitted and confirmed by read-back.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The time when the skill was updated. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1760000200000
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

