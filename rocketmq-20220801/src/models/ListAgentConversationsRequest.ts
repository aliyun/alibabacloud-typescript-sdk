// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentConversationsRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * eyJpZCI6IjAxOThjOGE5In0=
   */
  nextToken?: string;
  /**
   * @example
   * chat
   */
  purpose?: string;
  /**
   * @example
   * 消息堆积
   */
  q?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      purpose: 'purpose',
      q: 'q',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      purpose: 'string',
      q: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

