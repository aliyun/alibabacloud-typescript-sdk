// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Skill name.
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
   * Skill ID。
   * 
   * @example
   * skill_example123
   */
  skillId?: string;
  /**
   * @remarks
   * Returns `true` when the Skill update and optional bundle replacement have been fully committed and confirmed by read-back.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The time when the Skill was updated, in UNIX millisecond timestamp.
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

