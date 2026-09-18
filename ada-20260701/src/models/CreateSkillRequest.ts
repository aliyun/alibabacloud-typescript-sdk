// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the Skill.
   * 
   * This parameter is required.
   * 
   * @example
   * A Skill for reviewing code quality, security risks, and coding standards.
   */
  description?: string;
  /**
   * @remarks
   * The Skill metadata in JSON object format. Exactly one content source must be provided. For more information about the fields, see "Request parameter description".
   * 
   * This parameter is required.
   * 
   * @example
   * {"skillMd":"# Code Review\\nCheck code quality, security risks, and coding standards."}
   */
  metadata?: any;
  /**
   * @remarks
   * The unique identifier of the Skill. Only letters, digits, underscores, and hyphens are supported. The value can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review
   */
  name?: string;
  /**
   * @remarks
   * The visibility of the Skill. Valid values:
   * 
   * - user
   * - tenant
   * 
   * Default value: user.
   * 
   * @example
   * user
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metadata: 'Metadata',
      name: 'Name',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metadata: 'any',
      name: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

