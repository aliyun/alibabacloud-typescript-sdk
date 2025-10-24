// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  agentKey?: string;
  /**
   * @example
   * xxx
   */
  clientToken?: string;
  /**
   * @example
   * 43445343
   */
  groupId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xx
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      clientToken: 'ClientToken',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      clientToken: 'string',
      groupId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

