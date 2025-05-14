// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInnerGroupMembersRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * UZr*****
   */
  nextToken?: string;
  /**
   * @example
   * cidB8Pzg****FIWPv2PMA==
   */
  openConversationId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      openConversationId: 'OpenConversationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      openConversationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

