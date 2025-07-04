// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceSpecsRequest extends $dara.Model {
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   qrs: Query Result Searcher (QRS) Worker
   * *   search: Searcher Worker
   * *   index: index node
   * *   cluster: cluster
   * 
   * This parameter is required.
   * 
   * @example
   * search
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

