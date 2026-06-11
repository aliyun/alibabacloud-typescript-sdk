// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * customer-service-skill
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
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

