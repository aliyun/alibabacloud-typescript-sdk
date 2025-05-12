// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateResourceRequestSelfManagedResourceOptionsNodeTolerations } from "./CreateResourceRequestSelfManagedResourceOptionsNodeTolerations";


export class CreateResourceRequestSelfManagedResourceOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the self-managed cluster.
   * 
   * @example
   * cf0386f250f2545689ca7fdd1cd******
   */
  externalClusterId?: string;
  /**
   * @remarks
   * The tag key-value pairs of the node.
   */
  nodeMatchLabels?: { [key: string]: string };
  /**
   * @remarks
   * The tolerations for the node taint.
   */
  nodeTolerations?: CreateResourceRequestSelfManagedResourceOptionsNodeTolerations[];
  /**
   * @remarks
   * The name of the RAM user to which the permissions on Elastic Algorithm Service (EAS) of Platform for AI (PAI) are granted.
   * 
   * @example
   * clusterrole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      externalClusterId: 'ExternalClusterId',
      nodeMatchLabels: 'NodeMatchLabels',
      nodeTolerations: 'NodeTolerations',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalClusterId: 'string',
      nodeMatchLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      nodeTolerations: { 'type': 'array', 'itemType': CreateResourceRequestSelfManagedResourceOptionsNodeTolerations },
      roleName: 'string',
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

