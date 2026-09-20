// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadSkillVersionViaOssRequest extends $dara.Model {
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
   * The skill name.
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
   * 0.0.1
   */
  skillVersion?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      skillName: 'SkillName',
      skillVersion: 'SkillVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      skillName: 'string',
      skillVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

