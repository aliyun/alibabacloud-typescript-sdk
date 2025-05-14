// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNewestInnerGroupsResponseBodyGroupInfos extends $dara.Model {
  /**
   * @example
   * @lADOADma*****QKA
   */
  icon?: string;
  /**
   * @example
   * 10
   */
  memberAmount?: string;
  /**
   * @example
   * cid1e******==
   */
  openConversationId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      memberAmount: 'MemberAmount',
      openConversationId: 'OpenConversationId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      memberAmount: 'string',
      openConversationId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

