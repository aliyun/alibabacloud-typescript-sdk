// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantSceneDetailsResponseBodyDataRoleList extends $dara.Model {
  /**
   * @example
   * Carl, a curious boy
   */
  introduction?: string;
  introductionTranslate?: string;
  /**
   * @example
   * Hi Noah, who is that in the photo?
   */
  promoting?: string;
  promotingTranslate?: string;
  /**
   * @example
   * Carl
   */
  roleName?: string;
  /**
   * @example
   * Carl
   */
  roleNameTranslate?: string;
  /**
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      introduction: 'introduction',
      introductionTranslate: 'introductionTranslate',
      promoting: 'promoting',
      promotingTranslate: 'promotingTranslate',
      roleName: 'roleName',
      roleNameTranslate: 'roleNameTranslate',
      roleType: 'roleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      introduction: 'string',
      introductionTranslate: 'string',
      promoting: 'string',
      promotingTranslate: 'string',
      roleName: 'string',
      roleNameTranslate: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

