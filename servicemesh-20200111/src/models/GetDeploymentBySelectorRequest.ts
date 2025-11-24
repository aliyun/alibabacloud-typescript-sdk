// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentBySelectorRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * cbe80a56d07ed45818b4d39273e23****
   */
  guestCluster?: string;
  /**
   * @remarks
   * The label selector information.
   */
  labelSelector?: { [key: string]: string };
  /**
   * @remarks
   * The maximum number of returned data entries.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The marker of data queried last time.
   * 
   * @example
   * eyJ2IjoibWV0YS5rOHMuaW8vdjEiLCJydiI6NzgxODk3MCwic3RhcnQiOiJuZ2lueDQ1N1x1MDAw****
   */
  mark?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  nameSpace?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud Service Mesh (ASM) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ce9fc65def2aa4c918747b9360fbd****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      guestCluster: 'GuestCluster',
      labelSelector: 'LabelSelector',
      limit: 'Limit',
      mark: 'Mark',
      nameSpace: 'NameSpace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guestCluster: 'string',
      labelSelector: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      limit: 'number',
      mark: 'string',
      nameSpace: 'string',
      serviceMeshId: 'string',
    };
  }

  validate() {
    if(this.labelSelector) {
      $dara.Model.validateMap(this.labelSelector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

