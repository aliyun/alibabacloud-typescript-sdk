// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSuggestShrinkableNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The expected number of removable nodes to retrieve.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Specifies whether to ignore the instance status. Default value: false.
   * 
   * @example
   * false
   */
  ignoreStatus?: boolean;
  /**
   * @remarks
   * The type of nodes to scale in. **WORKER** indicates hot nodes. **WORKER_WARM** indicates warm nodes.
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
      ignoreStatus: 'ignoreStatus',
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ignoreStatus: 'boolean',
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

