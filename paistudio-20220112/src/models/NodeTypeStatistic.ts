// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeTypeStatistic extends $dara.Model {
  /**
   * @example
   * 4
   */
  canBeBoundCount?: number;
  /**
   * @example
   * ecs.g6.4xlarge
   */
  nodeType?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      canBeBoundCount: 'CanBeBoundCount',
      nodeType: 'NodeType',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBeBoundCount: 'number',
      nodeType: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

