// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * @example
   * 7d110ca6-05ee-4149-8042-13ad1a41fd****
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the management node.
   * 
   * @example
   * cyct_cnymu
   */
  nodeName?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      nodeId: 'string',
      nodeName: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

