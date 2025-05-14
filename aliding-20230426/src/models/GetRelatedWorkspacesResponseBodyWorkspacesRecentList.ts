// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRelatedWorkspacesResponseBodyWorkspacesRecentList extends $dara.Model {
  /**
   * @example
   * 1638256965936
   */
  lastEditTime?: number;
  /**
   * @example
   * 知识库
   */
  name?: string;
  /**
   * @example
   * nb9XxxxxxxmyAp
   */
  nodeId?: string;
  /**
   * @example
   * https://alidocs.xxxx/nb9XJKdxxxxmyAp
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      lastEditTime: 'LastEditTime',
      name: 'Name',
      nodeId: 'NodeId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastEditTime: 'number',
      name: 'string',
      nodeId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

