// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagRequest extends $dara.Model {
  /**
   * @remarks
   * AgentKey
   * 
   * @example
   * xxx
   */
  agentKey?: string;
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the tag group.
   * 
   * @example
   * 43445343
   */
  groupId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The tag name.
   * 
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

