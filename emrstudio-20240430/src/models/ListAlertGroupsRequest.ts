// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertGroupsRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @example
   * name
   */
  searchVal?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * w-lxyy60mpgpg****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchVal: 'searchVal',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      searchVal: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

