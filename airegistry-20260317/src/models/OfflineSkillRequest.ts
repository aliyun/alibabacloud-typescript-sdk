// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineSkillRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @example
   * version
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * customer-service-skill
   */
  skillName?: string;
  /**
   * @example
   * 0.0.2
   */
  skillVersion?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      scope: 'Scope',
      skillName: 'SkillName',
      skillVersion: 'SkillVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      scope: 'string',
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

