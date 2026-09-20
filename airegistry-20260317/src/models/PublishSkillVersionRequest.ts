// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishSkillVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @remarks
   * The Skill name.
   * 
   * This parameter is required.
   * 
   * @example
   * customer-service-skill
   */
  skillName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.2
   */
  skillVersion?: string;
  /**
   * @remarks
   * Specifies whether to update the latest label.
   * 
   * @example
   * true
   */
  updateLatestLabel?: boolean;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      skillName: 'SkillName',
      skillVersion: 'SkillVersion',
      updateLatestLabel: 'UpdateLatestLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      skillName: 'string',
      skillVersion: 'string',
      updateLatestLabel: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

