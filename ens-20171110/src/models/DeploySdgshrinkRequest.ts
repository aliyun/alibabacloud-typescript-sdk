// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeploySDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The SDG deployment type. Valid values:
   * 
   * *   common (default): read/write deployment. Data updates are written to disks.
   * *   overlay: read/write splitting deployment. Content in SDGs is read-only. Data updates are written to the local storage of the instance.
   * 
   * @example
   * common
   */
  deploymentType?: string;
  /**
   * @remarks
   * The IDs of instances on which you want to deploy SDGs. You can deploy SDGs on a maximum of 100 instances at a time.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The SDG ID. This parameter is used to create a disk, which is attached to an instance.
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

