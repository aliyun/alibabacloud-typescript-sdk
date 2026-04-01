// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCDeploymentSetRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment set ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ds-uf6c8qerk019bj1l****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentSetId: 'DeploymentSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSetId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

