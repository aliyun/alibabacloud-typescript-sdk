// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransferableNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The expected number of nodes to retrieve for data migration.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The type of node for data migration. **WORKER** indicates a hot node. **WORKER_WARM** indicates a warm node.
   * 
   * This parameter is required.
   * 
   * @example
   * WORKER
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

