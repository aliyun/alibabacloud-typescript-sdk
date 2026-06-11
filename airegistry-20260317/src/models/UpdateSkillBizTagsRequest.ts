// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillBizTagsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["cs","qa","support"]
   */
  bizTags?: string;
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
      bizTags: 'BizTags',
      namespaceId: 'NamespaceId',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTags: 'string',
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

