// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AckNodeSelectorLabels } from "./AckNodeSelectorLabels";
import { AckNodeSelectorTaints } from "./AckNodeSelectorTaints";


export class AckNodeSelector extends $dara.Model {
  /**
   * @remarks
   * 污点列表。
   */
  labels?: AckNodeSelectorLabels[];
  /**
   * @remarks
   * 污点列表。
   */
  taints?: AckNodeSelectorTaints[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      taints: 'Taints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': AckNodeSelectorLabels },
      taints: { 'type': 'array', 'itemType': AckNodeSelectorTaints },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.taints)) {
      $dara.Model.validateArray(this.taints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

