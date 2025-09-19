// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetClusterInterceptionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster. Separate multiple cluster IDs with commas (,).
   * 
   * > You can call the [ListClusterInterceptionConfig](~~ListClusterInterceptionConfig~~) operation to query the IDs of clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * c60b77fe62093480db6164a3c2fa****
   */
  clusterIds?: string;
  /**
   * @remarks
   * Specifies whether to turn on the switch. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  switchOn?: number;
  /**
   * @remarks
   * The type of the switch that you want to configure. Valid values:
   * 
   * *   **0**: the interception switch
   * *   **1**: the interception type switch
   * *   **2**: the interception history switch
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  switchType?: number;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      switchOn: 'SwitchOn',
      switchType: 'SwitchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
      switchOn: 'number',
      switchType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

