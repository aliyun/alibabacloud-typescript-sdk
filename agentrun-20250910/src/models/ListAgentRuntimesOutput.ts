// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentRuntime } from "./AgentRuntime";


export class ListAgentRuntimesOutput extends $dara.Model {
  /**
   * @remarks
   * Project List
   */
  items?: AgentRuntime[];
  /**
   * @remarks
   * Page number
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': AgentRuntime },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

