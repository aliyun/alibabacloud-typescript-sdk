// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations } from "./UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations";


export class UpdateResourceRequestSelfManagedResourceOptions extends $dara.Model {
  /**
   * @remarks
   * Tag tag key-value pairs for nodes.
   */
  nodeMatchLabels?: { [key: string]: string };
  /**
   * @remarks
   * Tolerations for nodes.
   */
  nodeTolerations?: UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations[];
  static names(): { [key: string]: string } {
    return {
      nodeMatchLabels: 'NodeMatchLabels',
      nodeTolerations: 'NodeTolerations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeMatchLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      nodeTolerations: { 'type': 'array', 'itemType': UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations },
    };
  }

  validate() {
    if(this.nodeMatchLabels) {
      $dara.Model.validateMap(this.nodeMatchLabels);
    }
    if(Array.isArray(this.nodeTolerations)) {
      $dara.Model.validateArray(this.nodeTolerations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

