// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInnerGroupMembersRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
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

