// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindingPolicy extends $dara.Model {
  /**
   * @remarks
   * A list of node IDs to exclude from scheduling.
   */
  excludeNodes?: string[];
  /**
   * @remarks
   * A list of node IDs to include in the scheduling.
   */
  includeNodes?: string[];
  /**
   * @remarks
   * The number of nodes to be selected by the scheduler.
   * 
   * @example
   * 5
   */
  nodeSpecCount?: number;
  static names(): { [key: string]: string } {
    return {
      excludeNodes: 'ExcludeNodes',
      includeNodes: 'IncludeNodes',
      nodeSpecCount: 'NodeSpecCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeNodes: { 'type': 'array', 'itemType': 'string' },
      includeNodes: { 'type': 'array', 'itemType': 'string' },
      nodeSpecCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.excludeNodes)) {
      $dara.Model.validateArray(this.excludeNodes);
    }
    if(Array.isArray(this.includeNodes)) {
      $dara.Model.validateArray(this.includeNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

