// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetSelectionSelectedTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the asset selection.
   * 
   * This parameter is required.
   * 
   * @example
   * 2e6ab33d-4e00-4581-ac16-0dd1f9ad****
   */
  selectionKey?: string;
  /**
   * @remarks
   * The query list.
   */
  targetList?: string[];
  static names(): { [key: string]: string } {
    return {
      selectionKey: 'SelectionKey',
      targetList: 'TargetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectionKey: 'string',
      targetList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetList)) {
      $dara.Model.validateArray(this.targetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

