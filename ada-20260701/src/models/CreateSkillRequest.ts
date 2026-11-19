// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the skill.
   * 
   * This parameter is required.
   * 
   * @example
   * A Skill for reviewing code quality, security risks, and coding standards.
   */
  description?: string;
  /**
   * @remarks
   * The metadata of the skill, in JSON object format. One and only one content source must be provided. For specific fields, refer to the supplementary description of request parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * {"skillMd":"# Code Review\\nCheck code quality, security risks, and coding standards."}
   */
  metadata?: any;
  /**
   * @remarks
   * The unique identifier of the skill. Only letters, digits, underscores, and hyphens are supported. The length cannot exceed 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review
   */
  name?: string;
  /**
   * @remarks
   * The visibility of the skill. Valid values: `user` and `tenant`. Default value: `user`.
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

