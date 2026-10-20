// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeploySDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The SDG deployment type. Valid values:
   * 
   * - common: (default) read/write deployment. Data updates are written to the cloud disk.
   * - overlay: read/write splitting deployment. The SDG content is read-only, and data updates are written to the local storage of the instance.
   * 
   * @example
   * common
   */
  deploymentType?: string;
  /**
   * @remarks
   * The list of device resource IDs to which the SDG is deployed. Batch deployment is supported, with a maximum of 100 instances per request.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The SDG ID. A cloud disk is created based on this SDG ID and mounted to the specified instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sdg-xxxxx
   */
  SDGId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentType: 'DeploymentType',
      instanceIdsShrink: 'InstanceIds',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentType: 'string',
      instanceIdsShrink: 'string',
      SDGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

