// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAirEcsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) instance.
   * 
   * @example
   * i-uf6ir9y******hvisj
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The data sources for which the client needs to be uninstalled.
   */
  uninstallClientSourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      uninstallClientSourceTypes: 'UninstallClientSourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      uninstallClientSourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uninstallClientSourceTypes)) {
      $dara.Model.validateArray(this.uninstallClientSourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

