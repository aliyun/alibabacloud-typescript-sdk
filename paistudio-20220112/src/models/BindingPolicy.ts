// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindingPolicy extends $dara.Model {
  excludeNodes?: string[];
  includeNodes?: string[];
  /**
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

