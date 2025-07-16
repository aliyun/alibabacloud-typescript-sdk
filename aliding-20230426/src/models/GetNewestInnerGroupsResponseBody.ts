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

export class GetNewestInnerGroupsResponseBody extends $dara.Model {
  groupInfos?: GetNewestInnerGroupsResponseBodyGroupInfos[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      groupInfos: 'groupInfos',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInfos: { 'type': 'array', 'itemType': GetNewestInnerGroupsResponseBodyGroupInfos },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupInfos)) {
      $dara.Model.validateArray(this.groupInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

