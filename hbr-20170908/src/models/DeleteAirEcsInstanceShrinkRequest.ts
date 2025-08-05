// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAirEcsInstanceShrinkRequest extends $dara.Model {
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
  uninstallClientSourceTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      uninstallClientSourceTypesShrink: 'UninstallClientSourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      uninstallClientSourceTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

