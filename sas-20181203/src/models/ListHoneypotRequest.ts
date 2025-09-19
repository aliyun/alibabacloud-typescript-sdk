// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotRequest extends $dara.Model {
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
   * The IDs of the honeypots.
   */
  honeypotIds?: string[];
  /**
   * @remarks
   * The name of the honeypot.
   * 
   * @example
   * mx-rouyi
   */
  honeypotName?: string;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * @example
   * a882e590-b87b-45a6-87b9-d0a3e5a0****
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the management node.
   * 
   * @example
   * honeypot_master
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
      honeypotIds: 'HoneypotIds',
      honeypotName: 'HoneypotName',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      honeypotIds: { 'type': 'array', 'itemType': 'string' },
      honeypotName: 'string',
      nodeId: 'string',
      nodeName: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.honeypotIds)) {
      $dara.Model.validateArray(this.honeypotIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

