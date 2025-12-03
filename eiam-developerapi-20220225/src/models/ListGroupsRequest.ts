// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the group name.
   * 
   * @example
   * group_xxx
   */
  groupNameStartWith?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * nextToken
   * 
   * @example
   * NTxxx
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupNameStartWith: 'groupNameStartWith',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNameStartWith: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

